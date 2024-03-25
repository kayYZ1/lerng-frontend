import { authApi } from "features/api/auth.api";

export const usersApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		UpdateUserData: builder.mutation({
			query: (data) => ({
				url: "/users/update/data",
				method: "PATCH",
				body: data,
			}),
		}),
		UpdateUserPassword: builder.mutation({
			query: (data) => ({
				url: "/users/update/password",
				method: "PATCH",
				body: data,
			}),
		}),
	}),
});

export const { useUpdateUserDataMutation, useUpdateUserPasswordMutation } =
	usersApiSlice;
