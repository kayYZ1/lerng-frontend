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
    GetFeedbackTickets: builder.query({
      query: () => ({
        url: '/feedback/tickets',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
  }),
});

export const { useAddFeedbackTicketMutation, useGetFeedbackTicketsQuery } =
  feedbackApiSlice;
