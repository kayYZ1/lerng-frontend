import { authApi } from 'app/api/auth.api';

export const questionsApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    AddQuestion: builder.mutation({
      query: ({ topicId, data }) => ({
        url: `/questions/add/${topicId}`,
        method: 'POST',
        body: data,
      }),
    }),
    GetQuestions: builder.query({
      query: (topicId: string) => ({
        url: `/questions/${topicId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAddQuestionMutation, useGetQuestionsQuery } =
  questionsApiSlice;
