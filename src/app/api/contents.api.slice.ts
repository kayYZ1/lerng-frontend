import { authApi } from 'app/base/auth.api';

export const contentsApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    GetContents: builder.query({
      query: (moduleId: string) => ({
        url: `/contents/${moduleId}`,
        method: 'GET',
      }),
      providesTags: ['Content'],
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
      invalidatesTags: ['Content'],
    }),
    EditContent: builder.mutation({
      query: (values) => ({
        url: '/contents/edit',
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['Content'],
    }),
    RemoveContent: builder.mutation({
      query: (contentId: string) => ({
        url: `/contents/remove/${contentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Content'],
    }),
  }),
});

export const {
  useGetContentsQuery,
  useNewContentMutation,
  useEditContentMutation,
  useRemoveContentMutation,
} = contentsApiSlice;
