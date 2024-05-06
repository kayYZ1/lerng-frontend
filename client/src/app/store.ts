import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth.slice';
import contentReducer from './contents/contents.slice';
import enrolledReducer from './enrolled/enrolled.slice';
import userReducer from './users/user.slice';

import { authApi } from './api/auth.api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    user: userReducer,
    enrolled: enrolledReducer,
    content: contentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  devTools: true,
});
