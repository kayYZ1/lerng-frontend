import { authApi } from "features/api/auth.api";

export const modulesApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		GetModulesInCourse: builder.query({
			query: (courseId: string) => ({
				url: `/modules/${courseId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetModulesInCourseQuery } = modulesApiSlice;
