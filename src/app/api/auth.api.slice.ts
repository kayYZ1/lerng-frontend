import { setCurrentUser } from 'app/slice/user.slice';
import { authApi } from '../base/auth.api';

export const authApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    SignInFn: builder.mutation({
      query: (data) => ({
        url: '/auth/local/sign-in',
        method: 'POST',
        body: data,
      }),
    }),
    SignUpFn: builder.mutation({
      query: (data) => ({
        url: '/auth/local/sign-up',
        method: 'POST',
        body: data,
      }),
    }),
    SignOutFn: builder.mutation({
      query: () => ({
        url: '/auth/sign-out',
        method: 'POST',
      }),
    }),
    GetMe: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCurrentUser(data));
      },
      providesTags: ['User'],
    }),
    ForgotPasswordFn: builder.mutation({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    ResetPasswordFn: builder.mutation({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useSignInFnMutation,
  useSignUpFnMutation,
  useSignOutFnMutation,
  useForgotPasswordFnMutation,
  useResetPasswordFnMutation,
  useGetMeQuery,
} = authApiSlice;
