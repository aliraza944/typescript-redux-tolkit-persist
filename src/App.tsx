import React from "react";

import "./App.css";

import { useAppSelector } from "./redux/hooks/hooks";
import { selectCount, selectAPIStatus } from "./redux/reducers/counterReducer";
import { useAppDispatch } from "./redux/hooks/hooks";
import {
  increment,
  decrement,
  incrementWithPayload,
} from "./redux/reducers/counterReducer";
import { fetchUserById } from "./redux/AsyncThunks/CounterThunk/CounterThunk";
import {
  exchangeMoney,
  selectExchange,
} from "./redux/reducers/exchangeReducer";
function App() {
  const state = useAppSelector(selectCount);
  const apiStatus = useAppSelector(selectAPIStatus);
  const exchange = useAppSelector(selectExchange);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">
        Redux typescript toolkit and redux persist boilerplate
      </h1>
      <p
        data-testid="displayCount"
        className="text-2xl text-blue-900 font-bold"
      >
        {state}
      </p>
      <div>
        <p className="mt-4 mb-4 capitalize text-xl">{apiStatus}</p>
      </div>
      <div className="flex items-center justify-center">
        {" "}
        <div className="w-60 flex items-center justify-between">
          <button
            className="border-2 bg-slate-500 p-5 w-20 rounded"
            onClick={() => dispatch(increment())}
          >
            add
          </button>
          <button
            className="border-2 bg-slate-500 p-5 w-20 rounded"
            onClick={() => dispatch(decrement())}
          >
            minus
          </button>
        </div>
      </div>
      <div>
        <button
          className="border-2 bg-slate-500 p-5 w-40 rounded"
          onClick={() => dispatch(incrementWithPayload(2))}
        >
          payload 2
        </button>
      </div>
      <div>
        <button
          className="border-2 bg-slate-500 p-5 w-40 rounded"
          onClick={() => dispatch(fetchUserById(1))}
        >
          Api call
        </button>
      </div>
      <div>
        <h1 className="text-xl text-blue-500">The exchange status</h1>
        <h1 className="text-xl text-blue-500" data-testid="exchange">
          {exchange}
        </h1>
        <button
          className="border-2 bg-blue-500 p-5 w-40 rounded"
          onClick={() => dispatch(exchangeMoney(4))}
        >
          Get Exchange Rate
        </button>
      </div>
    </div>
  );
}

export default App;
