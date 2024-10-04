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
    GetCoursesForUser: builder.query({
      query: (userId: string) => ({
        url: `/enrolled/user-courses/${userId}`,
        method: 'GET',
      }),
      providesTags: ['UserCourses'],
    }),
    GetInstructorStatistics: builder.query({
      query: () => ({
        url: '/enrolled/statistics/instructor',
        method: 'GET',
      }),
    }),
    UpdateRating: builder.mutation({
      query: (args) => {
        const { courseId, values } = args;
        return {
          url: `/enrolled/review/${courseId}`,
          method: 'PATCH',
          body: values,
        };
      },
      invalidatesTags: ['Enrolled'],
    }),
    GetRating: builder.query({
      query: (courseId) => ({
        url: `/enrolled/review/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Enrolled'],
    }),
    GetRatingByCourse: builder.query({
      query: (courseId) => ({
        url: `/enrolled/average-rating/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Enrolled'],
    }),
  }),
});

export const {
  useAddToEnrolledMutation,
  useGetEnrolledCoursesQuery,
  useGetInstructorStatisticsQuery,
  useUpdateRatingMutation,
  useGetRatingQuery,
  useGetCoursesForUserQuery,
  useGetRatingByCourseQuery,
} = enrolledApiSlice;
