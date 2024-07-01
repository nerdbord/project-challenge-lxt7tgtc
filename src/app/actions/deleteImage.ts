"use server";

import { createClient } from "@/utils/supabase/server";

export async function deleteImage(fileData: FormData) {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	const fileName = fileData.get("fileDelete") as string;

	const { error } = await supabase.storage.from("images").remove([`${user.id}/${fileName}`]);

	if (error) {
		console.error("Error deleting file:", error);
		return null;
	}

	return { success: true };
}
