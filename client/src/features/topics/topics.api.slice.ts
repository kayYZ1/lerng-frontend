import { authApi } from "features/api/auth.api";

export const modulesApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		GetTopicsFromCourse: builder.query({
			query: (courseId: string) => ({
				url: `/topics/${courseId}`,
				method: "GET",
			}),
		}),
		GetTopic: builder.query({
			query: (moduleId: string) => ({
				url: `/topics/topic/${moduleId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetTopicsFromCourseQuery, useGetTopicQuery } = modulesApiSlice;
