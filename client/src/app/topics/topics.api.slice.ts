import { authApi } from 'app/api/auth.api';

export const modulesApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTopicsFromCourse: builder.query({
      query: (courseId: string) => ({
        url: `/topics/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Topic'],
    }),
    GetTopic: builder.query({
      query: (moduleId: string) => ({
        url: `/topics/topic/${moduleId}`,
        method: 'GET',
      }),
    }),
    AddTopic: builder.mutation({
      query: (args) => {
        const { courseId, values } = args;
        return {
          url: `/topics/create/${courseId}`,
          method: 'POST',
          body: values,
        };
      },
      invalidatesTags: ['Topic'],
    }),
  }),
});

export const {
  useGetTopicsFromCourseQuery,
  useGetTopicQuery,
  useAddTopicMutation,
} = modulesApiSlice;
