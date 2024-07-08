"use server";

import { createClient } from "@/utils/supabase/server";

export async function signInWithGithub() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "github",
		options: {
			redirectTo: "http://localhost:3000/auth/callback",
		},
	});

	if (error) {
		console.error("Error signing in with GitHub:", error.message);
		return { success: false, message: `Error signing in with GitHub: ${error.message}` };
	}
	if (data && data.url) {
		return { success: true, url: data.url };
	}
	return { success: false, message: "Unknown error occurred" };
}
