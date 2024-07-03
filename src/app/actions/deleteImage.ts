"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function deleteImage(fileName: string) {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	const { error } = await supabase.storage.from("images").remove([`${user.id}/${fileName}`]);

	if (error) {
		console.error("Error deleting file:", error);
		return null;
	}

	revalidatePath("/dashboard", "page");
	return { success: true };
}
