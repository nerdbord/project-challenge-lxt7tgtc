"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";
import { Login } from "../ui/Login";

const Home: React.FC = () => {
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
			void checkUser();
		}
	}, [router]);

	return (
		<div>
			<Login />
		</div>
	);
};

export default Home;
