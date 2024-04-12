import { authApi } from 'app/api/auth.api';

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
    }),
  }),
});

export const {
  useSaveProgressMutation,
  useGetProgressQuery,
  useSaveQuizMutation,
} = progressApiSlice;
