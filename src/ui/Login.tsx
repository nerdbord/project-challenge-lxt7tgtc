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
} from "@chakra-ui/react";
import { signInWithMagicLink } from "@/api/actions";

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
				{/* TODO: implement Github signing in */}
				{/* <Divider my={4} borderColor="black" />
				<Flex justify="center">
					<Button bg="black" color="white" _hover={{ backgroundColor: "#333" }}>
						Sign In With Github
					</Button>
				</Flex> */}
			</FormControl>
		</Flex>
	);
};
