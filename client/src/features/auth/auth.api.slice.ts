import { authApi } from "../api/auth.api";

export const authApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		SignInFn: builder.mutation({
			query: (data) => ({
				url: "/auth/local/sign-in",
				method: "POST",
				body: data,
			}),
		}),
		SignUpFn: builder.mutation({
			query: (data) => ({
				url: "/auth/local/sign-up",
				method: "POST",
				body: data,
			}),
		}),
		SignOutFn: builder.mutation({
			query: () => ({
				url: "/auth/sign-out",
				method: "POST"
			})
		}),
		GetMe: builder.query({
			query: () => ({
				url: "/auth/me",
				method: "GET",
			}),
		}),
	}),
});

export const { useSignInFnMutation, useSignUpFnMutation, useSignOutFnMutation, useGetMeQuery } = authApiSlice;
