import { createSlice } from '@reduxjs/toolkit';
import { Course } from 'shared/ts/types';

const courses: Course[] = [];

const coursesSlice = createSlice({
  name: 'courses',
  initialState: courses,
  reducers: {
    setCourses: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export const selectCourses = (state: { courses: Course[] }) => state.courses;

export default coursesSlice.reducer;
