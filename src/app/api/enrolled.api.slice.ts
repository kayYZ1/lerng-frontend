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
        sessionStorage.setItem('enrolled', JSON.stringify(data));
      },
      providesTags: ['Enrolled'],
    }),
    GetInstructorStatistics: builder.query({
      query: () => ({
        url: '/enrolled/statistics/instructor',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useAddToEnrolledMutation,
  useGetEnrolledCoursesQuery,
  useGetInstructorStatisticsQuery,
} = enrolledApiSlice;
