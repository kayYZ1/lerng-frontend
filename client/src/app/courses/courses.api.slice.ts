import { authApi } from 'app/api/auth.api';

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
  useGetInstructorCoursesQuery,
  useGetInstructorFromCourseQuery,
} = coursesApiSlice;
