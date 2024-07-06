"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function deleteImage(fileName: string | string[]) {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	let files: string[] = [];

	if (Array.isArray(fileName)) {
		files = fileName.map((name) => `${user.id}/${name}`);
	} else {
		files = [`${user.id}/${fileName}`];
	}

	const { error } = await supabase.storage.from("images").remove(files);

	if (error) {
		console.error("Error deleting files:", error);
		return null;
	}

	revalidatePath("/dashboard", "page");
	return { success: true };
}
