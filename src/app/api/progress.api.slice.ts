import { authApi } from 'app/base/auth.api';
import { Progress } from 'shared/ts/types';

export const progressApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    GetProgress: builder.query<Progress, string>({
      query: (courseId) => ({
        url: `/progress/get/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Progress'],
    }),
    CountProgress: builder.query<number, string>({
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
  useGetProgressQuery,
  useSaveQuizMutation,
  useCountProgressQuery,
} = progressApiSlice;
