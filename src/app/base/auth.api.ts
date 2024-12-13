import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './base.api';

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 90,
  tagTypes: [
    'Auth',
    'Content',
    'Course',
    'Instructor',
    'Feedback',
    'Progress',
    'Question',
    'Topic',
    'Popular',
    'User',
    'Enrolled',
    'UserCourses',
    'Users',
  ],
  endpoints: () => ({}),
});
