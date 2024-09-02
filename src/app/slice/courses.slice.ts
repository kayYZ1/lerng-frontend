import { createSlice } from '@reduxjs/toolkit';
import { Course } from 'shared/ts/types';

type CoursesState = {
  courses: Course[];
  activeCourseId: string | null;
};

const initialState: CoursesState = {
  courses: [],
  activeCourseId: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setActiveCourseId: (state, action) => {
      state.activeCourseId = action.payload;
    },
  },
});

export const { setCourses, setActiveCourseId } = coursesSlice.actions;

export const selectCourses = (state: any) => state.courses.courses;
export const selectActiveCourseId = (state: any) =>
  state.courses.activeCourseId;

export default coursesSlice.reducer;
