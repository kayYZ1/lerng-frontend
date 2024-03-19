import {
	BaseQueryApi,
	FetchArgs,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { setCredentials, signOut } from "../auth/auth.slice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3000",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as any;
		const token = state.auth.accessToken;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: {}
) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 403) {
		console.log("Sending refreshToken");

		const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
		console.log(refreshResult);

		if (refreshResult?.data) {
			api.dispatch(setCredentials({ ...refreshResult.data }));

			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(signOut(undefined));
		}
	}
	return result;
};

export const authApi = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (_builder) => ({}),
});
