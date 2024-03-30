import { lazy } from "react";

import Path from "./paths";

const Dashboard = lazy(() => import("pages/dashboard/index"));
const SettingsProfile = lazy(() => import("pages/settings/index"));

const Courses = lazy(() => import("pages/courses/index"))
const SingleCourse = lazy(() => import("pages/courses/singleCourse/index"))

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

const SignIn = lazy(() => import("pages/auth/sign-in"));
const SignUp = lazy(() => import("pages/auth/sign-up"));

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


