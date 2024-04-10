import { authApi } from 'app/api/auth.api';

export const usersApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdateUserData: builder.mutation({
      query: (data) => ({
        url: '/users/update/data',
        method: 'PATCH',
        body: data,
      }),
    }),
    UpdateUserPassword: builder.mutation({
      query: (data) => ({
        url: '/users/update/password',
        method: 'PATCH',
        body: data,
      }),
    }),
    UpdateUserImage: builder.mutation({
      query: (data) => ({
        url: '/users/update/imageUrl',
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useUpdateUserDataMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserImageMutation,
} = usersApiSlice;
