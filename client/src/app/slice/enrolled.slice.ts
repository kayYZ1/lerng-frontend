import { createSlice } from '@reduxjs/toolkit';
import { EnrolledCourses } from 'shared/ts/types';

const enrolled: EnrolledCourses[] = [];

const enrolledSlice = createSlice({
  name: 'enrolled',
  initialState: enrolled,
  reducers: {
    setEnrolled: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setEnrolled } = enrolledSlice.actions;

export const selectMyCourses = (state: { enrolled: EnrolledCourses[] }) =>
  state.enrolled;

export default enrolledSlice.reducer;
