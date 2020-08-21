import * as React from "react";
// import * as ReactDOM from "react-dom";
import App from "./App";
// import { within, getQueriesForElement } from "@testing-library/dom";
import { render, getAllByText } from "@testing-library/react";

// this 'render' method is already provided in testing-library/react
// const render = (component) => {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);
//   return within(root);
// };

test("renders correct content", () => {
  const { getByText, getByLabelText, getAllByText } = render(<App />);

  expect(getByText("Signup Form")).not.toBeNull();
  expect(getByText("SIGN UP")).not.toBeNull();
  getByLabelText("Password");
  expect(getAllByText("Show")).not.toBeNull();
});
