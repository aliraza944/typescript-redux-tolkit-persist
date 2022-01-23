import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./counterReducer";

export const rootReducer = combineReducers({ CounterReducer });
export type RootState = ReturnType<typeof rootReducer>;
