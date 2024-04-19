import { authApi } from 'app/api/auth.api';
import { setCourses } from './courses.slice';

export const coursesApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    GetCourses: builder.query({
      query: () => ({
        url: '/courses/',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCourses(data));
        } catch (error) {
          console.error(error); //maybe return a promise?
        }
      },
    }),
    GetCourse: builder.query({
      query: (courseId: string) => ({
        url: `/courses/${courseId}`,
        method: 'GET',
      }),
    }),
    GetInstructorCourses: builder.query({
      query: () => ({
        url: `/courses/instructor`,
        method: 'GET',
      }),
    }),
    GetInstructorFromCourse: builder.query({
      query: (courseId: string) => ({
        url: `/courses/course/instructor/${courseId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useGetInstructorCoursesQuery,
  useGetInstructorFromCourseQuery,
} = coursesApiSlice;
