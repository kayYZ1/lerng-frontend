import { createSlice } from "@reduxjs/toolkit";
import { CourseModule } from "shared/types";

const modules: CourseModule[] = [];

const modulesSlice = createSlice({
	name: "modules",
	initialState: modules,
	reducers: {
		setModules: (_state, action) => {
			return action.payload;
		},
	},
});

export const { setModules } = modulesSlice.actions;

export const selectModules = (state: { modules: CourseModule[] }) =>
	state.modules;

export default modulesSlice.reducer;
