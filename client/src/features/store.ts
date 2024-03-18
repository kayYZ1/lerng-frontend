import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import { authApi } from "./auth/authApi";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
