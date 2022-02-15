import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

it("Shows header", () => {
  render(<MockApp />);
  const headerElement = screen.getByText(
    "Redux typescript toolkit and redux persist boilerplate"
  );
  expect(headerElement).toBeInTheDocument();
});

it("Adds one to the counter", () => {
  render(<MockApp />);

  const addButton = screen.getByText("add");

  const counter = screen.getByTestId("displayCount");

  fireEvent.click(addButton);
  expect(counter).toHaveTextContent("1");
});
it("Subtract one to the counter", () => {
  render(<MockApp />);

  const minusButton = screen.getByText("minus");

  const counter = screen.getByTestId("displayCount");

  fireEvent.click(minusButton);
  expect(counter).toHaveTextContent("-1");
});
it("Add 2 via the redux payload", () => {
  render(<MockApp />);

  const payloadButton = screen.getByText("payload 2");

  const counter = screen.getByTestId("displayCount");

  fireEvent.click(payloadButton);
  expect(counter).toHaveTextContent("2");
});
