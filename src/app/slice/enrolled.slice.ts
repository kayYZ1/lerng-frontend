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
    setEnrolled: (state, action) => {
      state = action.payload;
      sessionStorage.setItem('enrolled', JSON.stringify(state));
    },
  },
});

export const { setEnrolled } = enrolledSlice.actions;

export const selectMyCourses = (state: { enrolled: EnrolledCourses[] }) =>
  state.enrolled;

export default enrolledSlice.reducer;
