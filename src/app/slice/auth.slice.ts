import { createSlice } from '@reduxjs/toolkit';
import { setCurrentUser } from './user.slice';

const initialState = {
  token: JSON.parse(sessionStorage.getItem('accessToken')!) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem('accessToken', JSON.stringify(state.token));
    },
    setRefreshToken: (state, action) => {
      state.token = action.payload;
    },
    signOut: (state) => {
      state.token = null;
      sessionStorage.removeItem('accessToken');
      setCurrentUser({
        user: null,
      });
    },
  },
});

export const { setCredentials, setRefreshToken, signOut } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: { token: string } }) =>
  state.auth.token;
