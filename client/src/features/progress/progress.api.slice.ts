import { authApi } from "features/api/auth.api";

export const progressApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		SaveProgress: builder.mutation({
			query: ({ topicId, data }) => ({
				url: `/progress/save/${topicId}`,
				method: "PATCH",
				body: data,
			}),
		}),
		GetProgress: builder.query({
			query: (courseId) => ({
				url: `/progress/get/${courseId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useSaveProgressMutation, useGetProgressQuery } =
	progressApiSlice;
