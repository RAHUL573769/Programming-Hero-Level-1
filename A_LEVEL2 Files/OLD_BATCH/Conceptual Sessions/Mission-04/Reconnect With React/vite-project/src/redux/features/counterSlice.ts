/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		add: (state, action) => {
			state.count = state.count + 1;
		},
		subtract: (state, action) => {
			state.count = state.count - 1;
		},
	},
});

export const { add, subtract } = counterSlice.actions;
export default counterSlice.reducer;
