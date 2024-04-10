import { createSlice } from "@reduxjs/toolkit";
import { Course } from "shared/types";

const courses: Course[] = [];

const coursesSlice = createSlice({
	name: "courses",
	initialState: courses,
	reducers: {
		setCourses: (_state, action) => {
			return action.payload;
		},
	},
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
