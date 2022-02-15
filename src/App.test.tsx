import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "./redux/store";

const MockApp: React.FunctionComponent = () => {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  );
};

test("Shows header", () => {
  render(<MockApp />);
  const headerElement = screen.getByText(
    "Redux typescript toolkit and redux persist boilerplate"
  );
  expect(headerElement).toBeInTheDocument();
});
