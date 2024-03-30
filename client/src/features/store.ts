import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import coursesReducer from "./courses/courses.slice";
import modulesReducer from "./modules/modules.slice";

import { authApi } from "./api/auth.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
		courses: coursesReducer,
		modules: modulesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
