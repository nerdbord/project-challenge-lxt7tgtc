import { redirect } from "next/navigation";
import { Login } from "../ui/Login";
import { createClient } from "@/utils/supabase/server";

const Home: React.FC = async () => {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		redirect("/dashboard");
	}

	return <Login />;
};

export default Home;
