import React from "react";

import "./App.css";

import { useAppSelector } from "./redux/hooks/hooks";
import { selectCount } from "./redux/reducers/counterReducer";
import { useAppDispatch } from "./redux/hooks/hooks";
import {
  increment,
  decrement,
  incrementWithPayload,
} from "./redux/reducers/counterReducer";
function App() {
  const state = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1>Redux typescript toolkit and redux persist boilerplate</h1>
      <p>{state}</p>

      <div>
        <button onClick={() => dispatch(increment())}>add</button>
        <button onClick={() => dispatch(decrement())}>minus</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementWithPayload(2))}>
          payload 2
        </button>
      </div>
    </div>
  );
}

export default App;
