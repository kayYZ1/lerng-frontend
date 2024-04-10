import { createSlice } from "@reduxjs/toolkit";

import { StepIndex } from "shared/enum";

const initialState: StepIndex = StepIndex.CREATE_COURSE;

const courseStepperSlice = createSlice({
	name: "courseStepper",
	initialState,
	reducers: {
		setActiveStep: (_state, action) => {
			return action.payload;
		},
	},
});

export const { setActiveStep } = courseStepperSlice.actions;

export const selectActiveStep = (state: { courseStepper: StepIndex }) => {
	const activeStep = state.courseStepper;
	return Object.values(StepIndex).indexOf(activeStep);
};

export const selectStepToRender = (state: { courseStepper: StepIndex }) =>
	state.courseStepper;

export default courseStepperSlice.reducer;
