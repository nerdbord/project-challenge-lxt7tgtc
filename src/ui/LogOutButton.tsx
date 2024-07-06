"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export const LogOutButton = () => {
	const supabase = createClient();
	const router = useRouter();
	const [isLogoutLoading, setIsLogoutLoading] = useState(false);

	const logOut = async () => {
		setIsLogoutLoading(true);
		const { error } = await supabase.auth.signOut();

		if (!error) {
			router.push("/");
		}
	};

	return (
		<Button
			onClick={logOut}
			colorScheme="teal"
			size="lg"
			fontWeight="bold"
			color="white"
			cursor="pointer"
			bg="#A51813"
			_hover={{ bg: "#861110" }}
			isLoading={isLogoutLoading}
		>
			Sign out
		</Button>
	);
};
