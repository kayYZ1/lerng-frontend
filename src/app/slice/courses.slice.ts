import { createSlice } from '@reduxjs/toolkit';
import { Course } from 'shared/ts/types';

type CoursesState = {
  courses: Course[];
  activeCourseId: string | null;
};

const getInitialState = (): CoursesState => {
  const storedCourses = sessionStorage.getItem('courses');
  return storedCourses
    ? JSON.parse(storedCourses)
    : {
        courses: [],
        activeCourseId: null,
      };
};

const initialState: CoursesState = getInitialState();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      sessionStorage.setItem('courses', JSON.stringify(state));
    },
    setActiveCourseId: (state, action) => {
      state.activeCourseId = action.payload;
      sessionStorage.setItem('courses', JSON.stringify(state));
    },
  },
});

export const { setCourses, setActiveCourseId } = coursesSlice.actions;

export const selectCourses = (state: any) => state.courses.courses;
export const selectActiveCourseId = (state: any) =>
  state.courses.activeCourseId;

export default coursesSlice.reducer;
