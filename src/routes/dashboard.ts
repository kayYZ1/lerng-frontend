import { lazy, createElement } from 'react';

import { DashboardPath, CoursesPath } from './paths';

const Dashboard = lazy(() => import('features/dashboard/index'));
const Admin = lazy(() => import('features/dashboard/admin/index'));
const SettingsProfile = lazy(() => import('features/settings/index'));
const Enrolled = lazy(() => import('features/enrolled/index'));
const Feedback = lazy(() => import('features/feedback/index'));
const FeedbackInstructor = lazy(
  () => import('features/feedback/feedback-instructor/index'),
);

const Courses = lazy(() => import('features/courses/index'));
const SingleCourse = lazy(() => import('features/courses/single-course/index'));
const Topic = lazy(() => import('features/courses/single-course/topic/index'));
const Quiz = lazy(() => import('features/courses/single-course/quiz/index'));

const routes = [
  {
    path: DashboardPath.DASHBOARD,
    element: createElement(Dashboard),
  },
  {
    path: DashboardPath.ADMIN,
    element: createElement(Admin),
  },
  {
    path: DashboardPath.SETTINGS,
    element: createElement(SettingsProfile),
  },
  {
    path: DashboardPath.ENROLLED,
    element: createElement(Enrolled),
  },
  {
    path: DashboardPath.FEEDBACK,
    element: createElement(Feedback),
  },
  {
    path: DashboardPath.FEEDBACK_INSTRUCTOR,
    element: createElement(FeedbackInstructor),
  },
  {
    path: CoursesPath.COURSES,
    element: createElement(Courses),
  },
  {
    path: CoursesPath.COURSE,
    element: createElement(SingleCourse),
  },
  {
    path: CoursesPath.TOPIC,
    element: createElement(Topic),
  },
  {
    path: CoursesPath.QUIZ,
    element: createElement(Quiz),
  },
];

export default routes;
