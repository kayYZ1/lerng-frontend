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
      providesTags: ['Users'],
    }),
    GetAllUsers: builder.query({
      query: () => ({
        url: '/users/all',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    ChangeAccess: builder.mutation({
      query: (data) => ({
        url: '/users/change-access',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useUpdateUserDataMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserImageMutation,
  useGetLatestUsersQuery,
  useGetAllUsersQuery,
  useChangeAccessMutation,
} = usersApiSlice;
