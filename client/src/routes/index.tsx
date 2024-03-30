import { lazy } from "react";

import { AuthPath, DashboardPath, CoursesPath } from "./paths";

const Dashboard = lazy(() => import("pages/dashboard/index"));
const SettingsProfile = lazy(() => import("pages/settings/index"));

const Courses = lazy(() => import("pages/courses/index"))
const SingleCourse = lazy(() => import("pages/courses/single-course/index"))

const dashboardRoutes = [
	{
		path: DashboardPath.DASHBOARD,
		element: <Dashboard />
	},
	{
		path: DashboardPath.SETTINGS,
		element: <SettingsProfile />
	},
	{
		path: CoursesPath.COURSES,
		element: <Courses />
	},
	{
		path: CoursesPath.COURSE,
		element: <SingleCourse />
	},
];

const SignIn = lazy(() => import("pages/auth/sign-in"));
const SignUp = lazy(() => import("pages/auth/sign-up"));

const authRoutes = [
	{
		path: AuthPath.SIGN_IN,
		element: <SignIn />
	},
	{
		path: AuthPath.SIGN_UP,
		element: <SignUp />
	}
]


export { dashboardRoutes, authRoutes };


