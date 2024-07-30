import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './base.api';

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'Auth',
    'Content',
    'Course',
    'Feedback',
    'Progress',
    'Question',
    'Topic',
    'User',
    'Enrolled',
  ],
  endpoints: (_builder) => ({}),
});
