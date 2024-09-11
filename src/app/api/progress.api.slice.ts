import { authApi } from 'app/base/auth.api';

export const progressApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    SaveProgress: builder.mutation({
      query: ({ topicId, data }) => ({
        url: `/progress/save/${topicId}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    GetProgress: builder.query({
      query: (courseId) => ({
        url: `/progress/get/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Progress'],
    }),
    CountProgress: builder.query({
      query: (courseId) => ({
        url: `progress/count-progress/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Progress'],
    }),
    SaveQuiz: builder.mutation({
      query: (args) => {
        const { topicId, values } = args;
        return {
          url: `/progress/save/quiz/${topicId}`,
          method: 'PATCH',
          body: values,
        };
      },
      invalidatesTags: ['Progress'],
    }),
  }),
});

export const {
  useSaveProgressMutation,
  useGetProgressQuery,
  useSaveQuizMutation,
  useCountProgressQuery,
} = progressApiSlice;
