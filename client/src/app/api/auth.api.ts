import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './base.api';

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'Auth',
    'Content',
    'Course',
    'Progress',
    'Question',
    'Topic',
    'User',
  ],
  endpoints: (_builder) => ({}),
});
