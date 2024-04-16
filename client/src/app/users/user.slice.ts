import { createSlice } from '@reduxjs/toolkit';
import { UserData } from 'shared/ts/types';

interface UserState {
  user: null | UserData;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (_, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state: { user: UserData }) => state.user;

export default userSlice.reducer;
