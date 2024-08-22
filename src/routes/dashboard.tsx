import { lazy } from "react";

import { DashboardPath, CoursesPath } from "./paths";

const Dashboard = lazy(() => import("features/dashboard/index"));
const SettingsProfile = lazy(() => import("features/settings/index"));
const Enrolled = lazy(() => import("features/enrolled/index"));
const Feedback = lazy(() => import("features/feedback/index"));
const FeedbackInstructor = lazy(() => import("features/feedback/feedback-instructor/index"))

const Courses = lazy(() => import("features/courses/index"))
const SingleCourse = lazy(() => import("features/courses/single-course/index"))
const Topic = lazy(() => import("features/courses/single-course/topic/index"))
const Quiz = lazy(() => import("features/courses/single-course/quiz/index"))

const routes = [
  {
    path: DashboardPath.DASHBOARD,
    element: <Dashboard />
  },
  {
    path: DashboardPath.SETTINGS,
    element: <SettingsProfile />
  },
  {
    path: DashboardPath.ENROLLED,
    element: <Enrolled />
  },
  {
    path: DashboardPath.FEEDBACK,
    element: <Feedback />
  },
  {
    path: DashboardPath.FEEDBACK_INSTRUCTOR,
    element: <FeedbackInstructor />
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
]

export default routes