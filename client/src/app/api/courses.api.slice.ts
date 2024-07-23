import { authApi } from 'app/base/auth.api';

export const coursesApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateCourse: builder.mutation({
      query: (data) => ({
        url: '/courses/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Course'],
    }),
    GetCourses: builder.query({
      query: () => ({
        url: '/courses/',
        method: 'GET',
      }),
      providesTags: ['Course'],
    }),
    FilterCourses: builder.mutation({
      query: (search: string) => ({
        url: '/courses/query',
        method: 'POST',
        params: { search },
      }),
      invalidatesTags: ['Course'],
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
      providesTags: ['Course'],
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
  useCreateCourseMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useFilterCoursesMutation,
  useGetInstructorCoursesQuery,
  useGetInstructorFromCourseQuery,
} = coursesApiSlice;
