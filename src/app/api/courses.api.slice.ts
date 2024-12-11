import { authApi } from 'app/base/auth.api';
import { AddCourse, Course, EditCourse, User } from 'shared/ts/types';

export const coursesApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateCourse: builder.mutation<unknown, AddCourse>({
      query: (data) => ({
        url: '/courses/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Courses'],
    }),
    EditCourse: builder.mutation<unknown, EditCourse>({
      query: (data) => ({
        url: '/courses/edit',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Courses'],
    }),
    RemoveCourse: builder.mutation({
      query: (courseId: string) => ({
        url: `/courses/remove/${courseId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Courses'],
    }),
    GetCourses: builder.query<Course[], string>({
      query: () => ({
        url: '/courses/',
        method: 'GET',
      }),
      providesTags: ['Courses'],
    }),
    GetCourse: builder.query<Course, string>({
      query: (courseId: string) => ({
        url: `/courses/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Course'],
    }),
    GetInstructorCourses: builder.query<Course[], undefined>({
      query: () => ({
        url: `/courses/instructor`,
        method: 'GET',
      }),
      providesTags: ['Courses'],
    }),
    GetInstructorFromCourse: builder.query<User, string>({
      query: (courseId: string) => ({
        url: `/courses/course/instructor/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Instructor'],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useEditCourseMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useRemoveCourseMutation,
  useGetInstructorCoursesQuery,
  useGetInstructorFromCourseQuery,
} = coursesApiSlice;
