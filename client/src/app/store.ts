import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slice/auth.slice';
import contentReducer from './slice/contents.slice';
import enrolledReducer from './slice/enrolled.slice';
import userReducer from './slice/user.slice';

import { authApi } from './base/auth.api';

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

export type RootState = ReturnType<typeof store.getState>;
