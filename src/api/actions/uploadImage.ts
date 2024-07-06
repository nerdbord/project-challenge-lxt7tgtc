"use server";

import { revalidatePath } from "next/cache";
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
		throw new Error(error.message);
	}

	const { data: publicData } = supabase.storage
		.from("images")
		.getPublicUrl(`${user.id}/${file.name}`);

	if (!publicData) {
		throw new Error("Failed to get public URL");
	}

	revalidatePath("/dashboard", "page");
	return publicData.publicUrl;
}
