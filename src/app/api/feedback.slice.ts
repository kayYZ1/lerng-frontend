import { authApi } from 'app/base/auth.api';

export const feedbackApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    AddFeedbackTicket: builder.mutation({
      query: (values) => ({
        url: `/feedback/tickets/add`,
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
    InstructorTickets: builder.query({
      query: () => ({
        url: '/feedback/tickets/instructor',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
    ChangeTicketStatus: builder.mutation({
      query: (values) => ({
        url: '/feedback/tickets/status',
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});

export const {
  useAddFeedbackTicketMutation,
  useGetFeedbackTicketsQuery,
  useInstructorTicketsQuery,
  useChangeTicketStatusMutation,
} = feedbackApiSlice;
