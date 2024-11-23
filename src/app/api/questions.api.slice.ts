import { authApi } from 'app/base/auth.api';
import { Question } from 'shared/ts/types';

export const questionsApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    AddQuestion: builder.mutation({
      query: (args) => {
        const { topicId, values } = args;
        return {
          url: `/questions/add/${topicId}`,
          method: 'POST',
          body: values,
        };
      },
      invalidatesTags: ['Question'],
    }),
    EditQuestion: builder.mutation<Question, string>({
      query: (values) => ({
        url: '/questions/edit',
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['Question'],
    }),
    GetQuestions: builder.query<Question[], string>({
      query: (topicId: string) => ({
        url: `/questions/${topicId}`,
        method: 'GET',
      }),
      providesTags: ['Question'],
    }),
  }),
});

export const {
  useAddQuestionMutation,
  useGetQuestionsQuery,
  useEditQuestionMutation,
} = questionsApiSlice;
