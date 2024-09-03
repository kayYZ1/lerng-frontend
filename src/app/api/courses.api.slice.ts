import { authApi } from 'app/base/auth.api';
import { setCourses } from 'app/slice/courses.slice';

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
    EditCourse: builder.mutation({
      query: (data) => ({
        url: '/courses/edit',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Course'],
    }),
    GetCourses: builder.query({
      query: () => ({
        url: '/courses/',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCourses(data));
      },
      providesTags: ['Course'],
    }),
    GetCourse: builder.query({
      query: (courseId: string) => ({
        url: `/courses/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Course'],
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
  useEditCourseMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useGetInstructorCoursesQuery,
  useGetInstructorFromCourseQuery,
} = coursesApiSlice;
