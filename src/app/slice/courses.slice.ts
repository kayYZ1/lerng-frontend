import { createSlice } from '@reduxjs/toolkit';

type ActiveCourse = {
  activeCourse: string | null;
};

const getInitialState = (): ActiveCourse => {
  const storedActiveCourse = sessionStorage.getItem('course');
  return storedActiveCourse ? JSON.parse(storedActiveCourse) : null;
};

const initialState: ActiveCourse = getInitialState();

const coursesSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setActiveCourse: (_state, action) => {
      sessionStorage.setItem('course', JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { setActiveCourse } = coursesSlice.actions;

export const selectActiveCourse = (state: { course: ActiveCourse }) =>
  state.course;

export default coursesSlice.reducer;
