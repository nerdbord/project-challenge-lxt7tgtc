import { redirect } from "next/navigation";
import { Header } from "@/ui/header";
import { createClient } from "@/utils/supabase/server";
import { UploadImage } from "@/ui/UploadImage";
import { ImagesList } from "@/ui/ImagesList";

const DashboardPage: React.FC = async () => {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/");
	}

	return (
		<>
			<Header />
			<UploadImage />;
			<ImagesList />
		</>
	);
};

export default DashboardPage;
