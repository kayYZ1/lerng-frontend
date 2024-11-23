import { createSlice } from '@reduxjs/toolkit';
import { TEnrolled } from 'shared/ts/types';

const getInitialState = (): TEnrolled[] => {
  const storedCourses = sessionStorage.getItem('enrolled');
  return storedCourses ? JSON.parse(storedCourses) : [];
};

const initialState: TEnrolled[] = getInitialState();

const enrolledSlice = createSlice({
  name: 'enrolled',
  initialState,
  reducers: {
    setEnrolled: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setEnrolled } = enrolledSlice.actions;

export const selectMyCourses = (state: { enrolled: TEnrolled[] }) =>
  state.enrolled;

export default enrolledSlice.reducer;
