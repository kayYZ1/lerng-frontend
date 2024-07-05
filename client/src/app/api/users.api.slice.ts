import { authApi } from 'app/base/auth.api';

export const usersApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdateUserData: builder.mutation({
      query: (data) => ({
        url: '/users/update/data',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    UpdateUserPassword: builder.mutation({
      query: (data) => ({
        url: '/users/update/password',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    UpdateUserImage: builder.mutation({
      query: (data) => ({
        url: '/users/update/imageUrl',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    GetLatestUsers: builder.query({
      query: () => ({
        url: '/users/latest-users',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useUpdateUserDataMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserImageMutation,
  useGetLatestUsersQuery,
} = usersApiSlice;
