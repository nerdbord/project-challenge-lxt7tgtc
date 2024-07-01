"use server";

import { createClient } from "@/utils/supabase/server";

export async function uploadImage(fileData: FormData) {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	const file = fileData.get("fileUpload") as File;

	const { error } = await supabase.storage.from("images").upload(`${user.id}/${file.name}`, file);

	if (error) {
		console.error("Error uploading file:", error);
		return null;
	}

	const { data: publicData } = supabase.storage
		.from("images")
		.getPublicUrl(`${user.id}/${file.name}`);

	if (!publicData) {
		console.error("Error getting public URL:");
		return null;
	}

	return publicData.publicUrl;
}
