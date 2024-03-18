import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { accessToken: null },
	reducers: {
		setCredentials: (state, action) => {
			state.accessToken = action.payload;
			sessionStorage.setItem("accessToken", JSON.stringify(state.accessToken));
		},
		signOut: (state, _action) => {
			state.accessToken = null;
			sessionStorage.removeItem("accessToken");
		},
	},
});

export const { setCredentials, signOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: { token: string } }) =>
	state.auth.token;
