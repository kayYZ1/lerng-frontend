import { authApi } from "features/api/auth.api";

export const contentsApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		GetContents: builder.query({
			query: (moduleId: string) => ({
				url: `/contents/${moduleId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetContentsQuery } = contentsApiSlice;
