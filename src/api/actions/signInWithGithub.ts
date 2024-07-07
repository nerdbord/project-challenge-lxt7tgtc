// src/api/actions/signInWithGithub.ts
"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function signInWithGithub() {
	const supabase = createClient();
	try {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: "/dashboard",
			},
		});

		if (error) {
			throw new Error(`Error signing in with GitHub: ${error.message}`);
		}

		revalidatePath("/", "layout");
		return { success: true, message: "User signed in" };
	} catch (err) {
		const error = err as Error;
		console.error("Error in signInWithGithub:", error);
		return { success: false, message: error.message };
	}
}
