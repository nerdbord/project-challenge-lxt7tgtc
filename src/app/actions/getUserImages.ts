"use server";

import { createClient } from "@/utils/supabase/server";

type Image = {
	name: string;
	url: string;
};

export const getUserImages = async () => {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	const { data: userFiles } = await supabase.storage
		.from("images")
		.list(`${user.id}/`, { limit: 100, offset: 0 });

	if (userFiles) {
		const images: Image[] = userFiles.map((file) => ({
			name: file.name,
			url: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/images/${user.id}/${file.name}`,
		}));

		return images;
	}

	return [];
};
