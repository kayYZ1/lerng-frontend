  import { authApi } from "./authApi";

  export const authApiSlice = authApi.injectEndpoints({
    endpoints: (builder) => ({
      SignInFn: builder.mutation({
        query: (data) => ({
          url: "/auth/local/sign-in",
          method: "POST",
          body: data,
        }),
      }),
      SignUpFn: builder.mutation({
        query: (data) => ({
          url: "/auth/local/sign-up",
          method: "POST",
          body: data,
        }),
      }),
    }),
  });

  export const { useSignInFnMutation, useSignUpFnMutation } = authApiSlice;
