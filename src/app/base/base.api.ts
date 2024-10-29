import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { RootState } from 'app/store';
import { getCookie } from 'shared/lib/cookies';
import {
  setCredentials,
  setRefreshToken,
  signOut,
} from '../slice/auth.slice';

const prodUrl = import.meta.env.VITE_PROD_URL;
const localUrl = import.meta.env.VITE_DEV_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.MODE === 'development' ? localUrl : prodUrl,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken: string = getCookie();
    api.dispatch(setRefreshToken(refreshToken));

    const refreshResult = await baseQuery(
      '/auth/refresh',
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const accessToken = (refreshResult.data as { accessToken: string })
        .accessToken;
      api.dispatch(setCredentials(accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(signOut());
    }
  }
  return result;
};
