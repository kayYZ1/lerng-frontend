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
    SortCourses: builder.mutation({
      query: (sort: string) => ({
        url: '/courses/filter',
        method: 'POST',
        params: { sort },
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
  useEditCourseMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useFilterCoursesMutation,
  useSortCoursesMutation,
  useGetInstructorCoursesQuery,
  useGetInstructorFromCourseQuery,
} = coursesApiSlice;
