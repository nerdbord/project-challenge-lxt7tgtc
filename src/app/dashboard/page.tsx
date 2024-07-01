import { redirect } from "next/navigation";
import { Header } from "@/ui/Header";
import { Dashboard } from "@/ui/Dashboard";
import { createClient } from "@/utils/supabase/server";

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
			<Dashboard />;
		</>
	);
};

export default DashboardPage;
