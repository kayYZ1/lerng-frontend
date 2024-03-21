import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import { authApi } from "./auth/auth.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
