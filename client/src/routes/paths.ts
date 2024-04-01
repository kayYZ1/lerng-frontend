const AUTH = "/auth";
const AuthPath = {
	AUTH: AUTH,
	SIGN_IN: `${AUTH}/sign-in`,
	SIGN_UP: `${AUTH}/sign-up`,
};

const DASHBOARD = "/dashboard";
const DashboardPath = {
	DASHBOARD: DASHBOARD,
	SETTINGS: `${DASHBOARD}/settings`,
	ENROLLED: `${DASHBOARD}/enrolled`,
	CREATE_COURSE: `${DASHBOARD}/course-creation`,
};

const COURSES = `${DASHBOARD}/courses`;
const CoursesPath = {
	COURSES: COURSES,
	COURSE: `${COURSES}/course/:id`,
};

export { AuthPath, DashboardPath, CoursesPath };
