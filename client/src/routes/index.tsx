import { lazy } from "react";

import Path from "./paths";

const Dashboard = lazy(() => import("pages/Dashboard/index"));

const dashboardRoutes = [
	{
		path: Path.DASHBOARD,
		element: <Dashboard />
	},
];

const SignIn = lazy(() => import("pages/Auth/Sign-In"));
const SignUp = lazy(() => import("pages/Auth/Sign-Up"));

const authRoutes = [
	{
		path: Path.SIGN_IN,
		element: <SignIn />
	},
	{
		path: Path.SIGN_UP,
		element: <SignUp />
	}
]

const SettingsProfile = lazy(() => import("pages/Settings/Profile"));

const settingsRoutes = [
	{
		path: Path.PROFILE,
		element: <SettingsProfile />
	}
]

export { dashboardRoutes, authRoutes, settingsRoutes };


