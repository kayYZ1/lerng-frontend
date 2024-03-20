import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: sessionStorage.getItem("accessToken") || null,
};

const authSlice = createSlice({			
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.accessToken = action.payload;
			sessionStorage.setItem("accessToken", JSON.stringify(state.accessToken));
		},
		signOut: (state) => {
			state.accessToken = null;
			sessionStorage.removeItem("accessToken");
		},
	},
});

export const { setCredentials, signOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: { accessToken: string } }) =>
	state.auth.accessToken;
