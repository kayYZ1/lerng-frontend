import { lazy } from "react";

import Path from "./paths";

const Dashboard = lazy(() => import("pages/Dashboard/index"));
const SettingsProfile = lazy(() => import("pages/Settings"));

const Courses = lazy(() => import("pages/Courses/index"))
const SingleCourse = lazy(() => import("pages/Courses/SingleCourse/index"))

const dashboardRoutes = [
	{
		path: Path.DASHBOARD,
		element: <Dashboard />
	},
	{
		path: Path.SETTINGS,
		element: <SettingsProfile />
	},
	{
		path: Path.COURSES,
		element: <Courses />
	},
	{
		path: Path.COURSE,
		element: <SingleCourse />
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


export { dashboardRoutes, authRoutes };


