import { authApi } from 'app/base/auth.api';

export const feedbackApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    AddFeedbackTicket: builder.mutation({
      query: (values) => ({
        url: `/feedback/add-ticket`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});

export const { useAddFeedbackTicketMutation } = feedbackApiSlice;
