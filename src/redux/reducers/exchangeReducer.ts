import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface ExchangeState {
  exchange: number;
}
const initialState = {
  exchange: 0,
} as ExchangeState;
export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    exchangeMoney: (state: ExchangeState, action: PayloadAction<number>) => {
      state.exchange = action.payload * 200;
    },
  },
});
export const { exchangeMoney } = exchangeSlice.actions;
export const selectExchange = (state: RootState) =>
  state.ExchangeReducer.exchange;
export default exchangeSlice.reducer;
