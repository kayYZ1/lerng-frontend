import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './base.api';

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 60,
  tagTypes: [
    'Auth',
    'Content',
    'Contents',
    'Course',
    'Courses',
    'Instructor',
    'Feedback',
    'Progress',
    'Question',
    'Topic',
    'User',
    'Enrolled',
    'UserCourses',
    'Users',
  ],
  endpoints: () => ({}),
});
