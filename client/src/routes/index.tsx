import { lazy } from "react";

import { AuthPath, DashboardPath, CoursesPath } from "./paths";

const Dashboard = lazy(() => import("features/dashboard/index"));
const SettingsProfile = lazy(() => import("features/settings/index"));
const CreateCourse = lazy(() => import("features/dashboard/manage-courses/create-course"))

const Courses = lazy(() => import("features/courses/index"))
const SingleCourse = lazy(() => import("features/courses/single-course/index"))
const Topic = lazy(() => import("features/courses/single-course/topic/index"))
const Quiz = lazy(() => import("features/courses/single-course/quiz/index"))

const SignIn = lazy(() => import("features/auth/sign-in"));
const SignUp = lazy(() => import("features/auth/sign-up"));

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
		path: DashboardPath.CREATE_COURSE,
		element: <CreateCourse />
	},
	{
		path: CoursesPath.COURSES,
		element: <Courses />
	},
	{
		path: CoursesPath.COURSE,
		element: <SingleCourse />
	},
	{
		path: CoursesPath.TOPIC,
		element: <Topic />
	},
	{
		path: CoursesPath.QUIZ,
		element: <Quiz />
	}
];

const authRoutes = [
	{
		path: AuthPath.SIGN_IN,
		element: <SignIn />
	},
	{
		path: AuthPath.SIGN_UP,
		element: <SignUp />
	}
];


export { dashboardRoutes, authRoutes };


