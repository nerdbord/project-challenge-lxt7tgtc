"use client";
import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Image, Link, Heading, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export const Login: React.FC = () => {
	const [isSignUp, setIsSignUp] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const checkUser = async () => {
				try {
					const {
						data: { user },
					} = await supabase.auth.getUser();
					if (user) {
						router.push("/dashboard");
					}
				} catch (error) {
					console.error("Error checking user:", error);
				}
			};
			void checkUser(); // Zaznaczenie, że obietnica nie jest obsługiwana
		}
	}, [router]);

	const handleAuth = async () => {
		try {
			if (isSignUp) {
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
				});
				if (error) {
					console.log("Error signing up:", error.message);
				} else {
					console.log("User signed up:", data.user);
					router.push("/dashboard");
				}
			} else {
				const { data, error } = await supabase.auth.signInWithPassword({
					email,
					password,
				});
				if (error) {
					console.log("Error signing in:", error.message);
				} else {
					console.log("User signed in:", data.user);
					router.push("/dashboard");
				}
			}
		} catch (error) {
			console.error("Error in handleAuth:", error);
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
				<Input
					placeholder="Email"
					mb="4"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="Password"
					type="password"
					mb="6"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
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
