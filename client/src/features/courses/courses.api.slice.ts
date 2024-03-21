import { authApi } from "features/api/auth.api";

export const coursesApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		GetCourses: builder.query({
			query: () => ({
				url: "/courses/",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetCoursesQuery } = coursesApiSlice;
