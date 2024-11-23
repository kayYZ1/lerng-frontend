import { authApi } from 'app/base/auth.api';
import {
  HeroUser,
  UpdatePassword,
  UpdateUser,
  User,
  UserAccess,
} from 'shared/ts/types';

export const usersApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdateUserData: builder.mutation<unknown, UpdateUser>({
      query: (data) => ({
        url: '/users/update/data',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    UpdateUserPassword: builder.mutation<unknown, UpdatePassword>({
      query: (data) => ({
        url: '/users/update/password',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    UpdateUserImage: builder.mutation<unknown, unknown>({
      query: (data) => ({
        url: '/users/update/imageUrl',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    GetLatestUsers: builder.query<HeroUser[], undefined>({
      query: () => ({
        url: '/users/latest-users',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    GetAllUsers: builder.query<User, string>({
      query: () => ({
        url: '/users/all',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    ChangeAccess: builder.mutation<unknown, UserAccess>({
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
