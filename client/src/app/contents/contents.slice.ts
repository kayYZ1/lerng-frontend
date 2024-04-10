import { createSlice } from "@reduxjs/toolkit";

import { Content } from "shared/types";

const initialState: Content | null = null;

const contentsSlice = createSlice({
	name: "content",
	initialState,
	reducers: {
		setActiveContent: (_state, action) => {
			return action.payload;
		},
	},
});

export const { setActiveContent } = contentsSlice.actions;

export const selectActiveContent = (state: { content: Content }) =>
	state.content;

export default contentsSlice.reducer;
