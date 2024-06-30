import { supabase } from "../lib/supabaseClient";

export async function signIn(email: string, password: string) {
	const { data, error } = await supabase.auth.signInWithPassword({ email, password });
	if (error) {
		console.error("Error signing in:", error);
	} else {
		console.log("User signed in:", data.user);
	}
}

export async function signUp(email: string, password: string) {
	const { data, error } = await supabase.auth.signUp({ email, password });
	if (error) {
		console.error("Error signing up:", error);
	} else {
		console.log("User signed up:", data.user);
	}
}

export async function uploadImage(userId: string, file: File) {
	const { error } = await supabase.storage.from("images").upload(`${userId}/${file.name}`, file);

	if (error) {
		console.error("Error uploading file:", error);
		return null;
	}

	const { data: publicData } = supabase.storage
		.from("images")
		.getPublicUrl(`${userId}/${file.name}`);

	if (!publicData) {
		console.error("Error getting public URL:");
		return null;
	}

	return publicData.publicUrl;
}

export async function saveFileMetadata(userId: string, fileUrl: string) {
	const { data, error } = await supabase
		.from("user_files")
		.insert([{ user_id: userId, file_url: fileUrl }]);

	if (error) {
		console.error("Error saving file metadata:", error);
	} else {
		console.log("File metadata saved:", data);
	}
}
