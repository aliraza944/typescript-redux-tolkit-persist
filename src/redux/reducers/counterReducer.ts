import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface CounterState {
  value: number;
}

const initialState = {
  value: 0,
} as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementWithPayload: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, incrementWithPayload } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.CounterReducer.value;

export default counterSlice.reducer;
