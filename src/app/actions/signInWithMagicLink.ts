"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function signInWithMagicLink(email: string) {
	const supabase = createClient();
	try {
		const { error: userError } = await supabase.auth.signInWithOtp({
			email,
			options: {
				shouldCreateUser: true,
				emailRedirectTo: "/dashboard",
			},
		});

		if (userError) {
			throw new Error(`Error sending magic link: ${userError.message}`);
		}

		revalidatePath("/dashboard", "page");

		return { success: true, message: "User signed in" };
	} catch (error) {
		console.error("Error in signInWithEmail:", error);
		return { success: false, error };
	}
}
