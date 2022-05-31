import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./counterReducer";
import ExchangeReducer from "./exchangeReducer";
export const rootReducer = combineReducers({
  CounterReducer,

  ExchangeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
