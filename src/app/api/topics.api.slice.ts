import { authApi } from 'app/base/auth.api';
import { AddTopic, Topic } from 'shared/ts/types';

export const modulesApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTopicsFromCourse: builder.query<Topic[], string>({
      query: (courseId: string) => ({
        url: `/topics/${courseId}`,
        method: 'GET',
      }),
      providesTags: ['Topic'],
    }),
    GetTopic: builder.query<Topic, string>({
      query: (topicId: string) => ({
        url: `/topics/topic/${topicId}`,
        method: 'GET',
      }),
    }),
    AddTopic: builder.mutation<unknown, AddTopic>({
      query: (values) => {
        return {
          url: `/topics/create/${values.courseId}`,
          method: 'POST',
          body: values,
        };
      },
      invalidatesTags: ['Topic'],
    }),
    EditTopic: builder.mutation<unknown, unknown>({
      query: (values) => ({
        url: '/topics/edit',
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['Topic'],
    }),
    RemoveTopic: builder.mutation<unknown, string>({
      query: (topicId: string) => ({
        url: `/topics/topic/${topicId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Topic'],
    }),
  }),
});

export const {
  useGetTopicsFromCourseQuery,
  useGetTopicQuery,
  useAddTopicMutation,
  useEditTopicMutation,
  useRemoveTopicMutation,
} = modulesApiSlice;
