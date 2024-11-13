import { createSlice } from '@reduxjs/toolkit';

const getInitialState = (): string | null => {
  const storedActiveCourse = sessionStorage.getItem('course');
  return storedActiveCourse ? JSON.parse(storedActiveCourse) : null;
};

const initialState: string | null = getInitialState();

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

export const selectActiveCourse = (state: { course: string | null }) =>
  state.course;

export default coursesSlice.reducer;
