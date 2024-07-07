"use client";

import { useState } from "react";
import {
	Button,
	Flex,
	Image,
	Heading,
	Input,
	FormControl,
	FormErrorMessage,
	useToast,
	Divider,
} from "@chakra-ui/react";
import { signInWithMagicLink } from "@/api/actions";
import { signInWithGithub } from "@/api/actions/signInWithGithub";

export const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [isError, setIsError] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const toast = useToast();

	const handleSendMagicLink = async () => {
		setIsSending(true);
		if (!isError) {
			await signInWithMagicLink(email);
			toast({
				title: "Magic Link Sent",
				description: `We've sent a magic link to ${email}. Check your inbox!`,
				status: "success",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		}
	};

	const handleGithubSignIn = async () => {
		setIsSending(true);
		const response = await signInWithGithub();
		if (response.success) {
			toast({
				title: "GitHub Sign In",
				description: "You've been signed in with GitHub.",
				status: "success",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} else {
			toast({
				title: "Error",
				description: response.message,
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		}
		setIsSending(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

		setIsError(!isValidEmail);
		setEmail(value);
	};

	return (
		<Flex minH="100vh" direction="column" align="center" justify="center" bg="gray.100">
			<Image
				borderRadius="full"
				boxSize="300px"
				src="/logo.png"
				alt="Logo"
				cursor="pointer"
				mb="14"
			/>
			<FormControl
				w="full"
				maxW="sm"
				p="8"
				bg="white"
				rounded="md"
				shadow="md"
				as="form"
				isInvalid={isError}
			>
				<Heading mb="6" textAlign="center" fontSize="2xl">
					Sign In With Magic Link
				</Heading>
				<Input
					placeholder="Email"
					mb="4"
					name="email"
					id="email"
					value={email}
					onChange={handleChange}
					type="email"
					required
				/>
				{isError && <FormErrorMessage>Please enter a valid email address</FormErrorMessage>}
				<Button
					onClick={handleSendMagicLink}
					w="full"
					colorScheme="teal"
					bg="#A51813"
					_hover={{ bg: "#861110" }}
					isDisabled={email === "" ? true : false}
					isLoading={isSending}
				>
					Get Magic Link
				</Button>
				<Divider my={4} borderColor="white" />
				<Flex justify="center">
					<Button
						onClick={handleGithubSignIn}
						bg="black"
						color="white"
						w="full"
						_hover={{ backgroundColor: "#333" }}
						isLoading={isSending}
					>
						Sign In With Github
					</Button>
				</Flex>
			</FormControl>
		</Flex>
	);
};
