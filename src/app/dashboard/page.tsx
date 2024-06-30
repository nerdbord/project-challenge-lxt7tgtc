import React from "react";
import { Dashboard } from "../../ui/Dashboard";
import { Header } from "../../ui/Header";

const DashboardPage: React.FC = () => {
	return (
		<div>
			<Header />
			<Dashboard />;
		</div>
	);
};

export default DashboardPage;
