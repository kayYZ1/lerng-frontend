import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import userReducer from "./users/user.slice";
import courseStepperReducer from "./courses/course-stepper.slice";
import contentReducer from "./contents/contents.slice"

import { authApi } from "./api/auth.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
		user: userReducer,
		courseStepper: courseStepperReducer,
		content: contentReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
