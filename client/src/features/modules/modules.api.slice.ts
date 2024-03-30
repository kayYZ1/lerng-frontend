import { authApi } from "features/api/auth.api";
import { setModules } from "./modules.slice";

export const modulesApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		GetModulesInCourse: builder.query({
			query: (courseId: string) => ({
				url: `/modules/${courseId}`,
				method: "GET",
			}),
			async onQueryStarted(courseId, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(setModules(data));
				} catch (error) {
					console.error(error);
				}
			},
		}),
	}),
});

export const { useGetModulesInCourseQuery } = modulesApiSlice;
