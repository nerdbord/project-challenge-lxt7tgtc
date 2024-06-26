"use client";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { supabase } from "../lib/supabaseClient";

const Home: React.FC = () => {
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
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
			<div className="mb-10 flex items-center font-roboto text-7xl">🔗 Link My Image 🔗</div>
			<div className="w-full max-w-sm rounded bg-white p-8 shadow-md">
				<h1 className="mb-6 text-center text-2xl font-bold">{isSignUp ? "Sign Up" : "Sign In"}</h1>

				<Button onClick={handleAuth} className="w-full">
					{isSignUp ? "Sign up with Supabase" : "Sign In with Supabase"}
				</Button>
				<div className="mt-4 text-center">
					<a
						href="#"
						onClick={() => setIsSignUp(!isSignUp)}
						className="text-blue-500 hover:underline"
					>
						{isSignUp ? "Already have an account? Sign In" : "Don’t have an account? Sign Up"}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
