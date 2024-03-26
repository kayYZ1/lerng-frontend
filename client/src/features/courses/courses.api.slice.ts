import { authApi } from "features/api/auth.api";

export const coursesApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		GetCourses: builder.query({
			query: () => ({
				url: "/courses/",
				method: "GET",
			}),
		}),
		GetCourse: builder.query({
			query: (courseId: string) => ({
				url: `/courses/${courseId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetCoursesQuery, useGetCourseQuery } = coursesApiSlice;
