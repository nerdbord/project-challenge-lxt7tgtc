"use client";
import React, { useState } from "react";
import { Button, Flex, Image, Link, Heading, Input, FormControl } from "@chakra-ui/react";
import { signIn } from "@/app/actions/signIn";
import { signUp } from "@/app/actions/signUp";

export const Login: React.FC = () => {
	const [isSignUp, setIsSignUp] = useState(true);

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
			<FormControl w="full" maxW="sm" p="8" bg="white" rounded="md" shadow="md" as="form">
				<Heading mb="6" textAlign="center" fontSize="2xl">
					{isSignUp ? "Sign Up" : "Sign In"}
				</Heading>
				<Input placeholder="Email" mb="4" name="email" id="email" type="email" />
				<Input placeholder="Password" type="password" name="password" id="password" mb="6" />
				<Button
					type="submit"
					formAction={isSignUp ? signUp : signIn}
					w="full"
					colorScheme="teal"
					bg="#A51813"
					_hover={{ bg: "#861110" }}
				>
					{isSignUp ? "Sign up with Supabase" : "Sign In with Supabase"}
				</Button>
				<Flex mt="4" justify="center">
					<Link
						onClick={() => setIsSignUp(!isSignUp)}
						color="black.500"
						_hover={{ textDecoration: "underline" }}
					>
						{isSignUp ? "Already have an account? Sign In" : "Don’t have an account? Sign Up"}
					</Link>
				</Flex>
			</FormControl>
		</Flex>
	);
};
