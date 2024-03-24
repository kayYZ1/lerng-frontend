import { authApi } from "features/api/auth.api";

export const usersApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		UpdateUserData: builder.mutation({
			query: () => ({
				url: "/users/update/data",
				method: "PATCH",
			}),
		}),
		UpdateUserPassword: builder.mutation({
			query: () => ({
				url: "/users/update/password",
				method: "PATCH",
			}),
		}),
	}),
});

export const { useUpdateUserDataMutation, useUpdateUserPasswordMutation } =
	usersApiSlice;
