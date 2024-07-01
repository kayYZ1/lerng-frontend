const DefaultPath = {
  LANDING_PAGE: '/',
  HOME: '/home',
};

const AUTH = '/auth';
const AuthPath = {
  AUTH: AUTH,
  SIGN_IN: `${AUTH}/sign-in`,
  SIGN_UP: `${AUTH}/sign-up`,
  FORGOT_PASSWORD: `${AUTH}/forgot-password`,
  RESET_PASSWORD: `${AUTH}/forgot-password/:token`,
};

const DASHBOARD = '/dashboard';
const DashboardPath = {
  DASHBOARD: DASHBOARD,
  SETTINGS: `${DASHBOARD}/settings`,
  ENROLLED: `${DASHBOARD}/enrolled`,
};

const COURSES = `${DASHBOARD}/courses`;
const CoursesPath = {
  COURSES: COURSES,
  COURSE: `${COURSES}/course/:id`,
  TOPIC: `${COURSES}/course/topic/:id`,
  QUIZ: `${COURSES}/course/topic/quiz/:id`,
};

export { AuthPath, CoursesPath, DashboardPath, DefaultPath };
