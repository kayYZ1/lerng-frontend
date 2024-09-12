import { createSlice } from '@reduxjs/toolkit';

type CoursesState = {
  activeCourseId: string | null;
};

const getInitialState = (): CoursesState => {
  const storedCourses = sessionStorage.getItem('courses');
  return storedCourses
    ? JSON.parse(storedCourses)
    : {
        activeCourseId: null,
      };
};

const initialState: CoursesState = getInitialState();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setActiveCourseId: (state, action) => {
      state.activeCourseId = action.payload;
      sessionStorage.setItem('courses', JSON.stringify(state));
    },
  },
});

export const { setActiveCourseId } = coursesSlice.actions;

export const selectActiveCourseId = (state: any) =>
  state.courses.activeCourseId;

export default coursesSlice.reducer;
