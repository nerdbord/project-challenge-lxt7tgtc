import { redirect } from "next/navigation";
import { Center, Text, VStack } from "@chakra-ui/react";
import { Header } from "@/ui/Header";
import { createClient } from "@/utils/supabase/server";
import { UploadImage } from "@/ui/UploadImage";
import { ImagesList } from "@/ui/ImagesList";
import { getUserImages } from "@/api/actions";

const DashboardPage: React.FC = async () => {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/");
	}

	const images = await getUserImages();

	return (
		<>
			<Header />
			<VStack className="mt-28 w-full justify-center p-8" spacing={8}>
				<UploadImage />;
				{images.length > 0 ? (
					<ImagesList images={images} />
				) : (
					<Center>
						<Text>User hasn&apos;t uploaded any images yet</Text>
					</Center>
				)}
			</VStack>
		</>
	);
};

export default DashboardPage;
