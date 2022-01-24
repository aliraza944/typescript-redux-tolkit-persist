import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { fetchUserById } from "../AsyncThunks/CounterThunk/CounterThunk";
interface CounterState {
  value: number;
  apiStatus: string;
}

const initialState = {
  value: 0,
  apiStatus: "idle",
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
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.apiStatus = "pending";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.value += action.payload;
      state.apiStatus = "fulfilled";
    });
  },
});

export const { increment, decrement, incrementWithPayload } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.CounterReducer.value;
export const selectAPIStatus = (state: RootState) =>
  state.CounterReducer.apiStatus;

export default counterSlice.reducer;
