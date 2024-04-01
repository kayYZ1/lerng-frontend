import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import userReducer from "./users/user.slice";
import coursesReducer from "./courses/courses.slice";
import courseStepperReducer from "./courses/course-stepper.slice";

import { authApi } from "./api/auth.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
		user: userReducer,
		courses: coursesReducer,
		courseStepper: courseStepperReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
