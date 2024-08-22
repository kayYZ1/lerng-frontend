import { authApi } from 'app/base/auth.api';
import { setEnrolled } from '../slice/enrolled.slice';

export const enrolledApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    AddToEnrolled: builder.mutation({
      query: (courseId: string) => ({
        url: `/enrolled/add/${courseId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Enrolled'],
    }),
    GetEnrolledCourses: builder.query({
      query: () => ({
        url: '/enrolled/',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setEnrolled(data));
      },
      providesTags: ['Enrolled'],
    }),
  }),
});

export const { useAddToEnrolledMutation, useGetEnrolledCoursesQuery } =
  enrolledApiSlice;
