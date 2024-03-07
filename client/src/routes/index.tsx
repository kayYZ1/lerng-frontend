import { lazy } from "react";

import Path from "./paths";

const Dashboard = lazy(() => import("pages/Dashboard/index"));

const dashboardRoutes = [
	{
		path: Path.DASHBOARD,
		element: <Dashboard />
	},
];

export { dashboardRoutes };
