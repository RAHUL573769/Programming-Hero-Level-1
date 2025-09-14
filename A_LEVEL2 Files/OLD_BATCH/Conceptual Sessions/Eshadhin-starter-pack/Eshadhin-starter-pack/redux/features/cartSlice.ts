import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
interface CounterState {
	value: number;
}

// Define the initial state using that type
const initialState = {
	products: [] as any,
	selectedItems: 0,
	totalPrice: 0,
	tax: 0,
	taxRate: 0.1,
	grandTotal: 0,
};

export const cartSlice = createSlice({
	name: "counter",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const isExist = state.products.find(
				(product) => product.id === action.payload.id
			);

			if (!isExist) {
				state.products.push({ ...action.payload, quantity: 1 });
			}
		},
	},
});

export const {} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
