import { redirect } from "next/navigation";
import { Header } from "@/ui/header";
import { createClient } from "@/utils/supabase/server";
import { UploadImage } from "@/ui/UploadImage";

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
		</>
	);
};

export default DashboardPage;
