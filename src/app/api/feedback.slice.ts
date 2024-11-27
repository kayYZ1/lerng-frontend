import { authApi } from 'app/base/auth.api';
import { AddFeedback, Feedback, FeedbackStatus } from 'shared/ts/types';

export const feedbackApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    AddFeedbackTicket: builder.mutation<string, AddFeedback>({
      query: (values) => ({
        url: `/feedback/tickets/add`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Feedback'],
    }),
    GetFeedbackTickets: builder.query<Feedback[], string>({
      query: () => ({
        url: '/feedback/tickets',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
    InstructorTickets: builder.query<Feedback[], string>({
      query: () => ({
        url: '/feedback/tickets/instructor',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
    ChangeTicketStatus: builder.mutation<string, FeedbackStatus>({
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
