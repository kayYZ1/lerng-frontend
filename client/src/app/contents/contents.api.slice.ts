import { authApi } from 'app/api/auth.api';

export const contentsApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    GetContents: builder.query({
      query: (moduleId: string) => ({
        url: `/contents/${moduleId}`,
        method: 'GET',
      }),
    }),
    NewContent: builder.mutation({
      query: (args) => {
        const { topicId, values } = args;
        return {
          url: `/contents/create/${topicId}`,
          method: 'POST',
          body: values,
        };
      },
    }),
  }),
});

export const { useGetContentsQuery, useNewContentMutation } = contentsApiSlice;
