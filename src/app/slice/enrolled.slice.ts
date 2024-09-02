import { createSlice } from '@reduxjs/toolkit';
import { EnrolledCourses } from 'shared/ts/types';

const getInitialState = (): EnrolledCourses[] => {
  const storedCourses = sessionStorage.getItem('enrolled');
  return storedCourses ? JSON.parse(storedCourses) : [];
};

const initialState: EnrolledCourses[] = getInitialState();

const enrolledSlice = createSlice({
  name: 'enrolled',
  initialState,
  reducers: {
    setEnrolled: (_state, action) => {
      sessionStorage.setItem('enrolled', JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { setEnrolled } = enrolledSlice.actions;

export const selectMyCourses = (state: { enrolled: EnrolledCourses[] }) =>
  state.enrolled;

export default enrolledSlice.reducer;
