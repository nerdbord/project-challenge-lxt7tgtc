"use client";
import React, { useState } from "react";
import { Button, Box, Flex, Image, Link, Heading } from "@chakra-ui/react";
import { supabase } from "../lib/supabaseClient";

export const Login: React.FC = () => {
	const [isSignUp, setIsSignUp] = useState(true);

	const handleAuth = async () => {
		if (isSignUp) {
			const { data, error } = await supabase.auth.signUp({
				email: "example@example.com",
				password: "example-password",
			});
			if (error) console.log("Error signing up:", error.message);
			else console.log("User signed up:", data.user);
		} else {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: "example@example.com",
				password: "example-password",
			});
			if (error) console.log("Error signing in:", error.message);
			else console.log("User signed in:", data.user);
		}
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
			<Box w="full" maxW="sm" p="8" bg="white" rounded="md" shadow="md">
				<Heading mb="6" textAlign="center" fontSize="2xl">
					{isSignUp ? "Sign Up" : "Sign In"}
				</Heading>

				<Button
					onClick={handleAuth}
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
			</Box>
		</Flex>
	);
};
