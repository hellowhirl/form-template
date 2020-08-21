import * as React from "react";
// import * as ReactDOM from "react-dom";
import { App } from "./App";
// import { within, getQueriesForElement } from "@testing-library/dom";
import { render } from "@testing-library/react";

// this 'render' method is already provided in testing-library/react
// const render = (component) => {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);
//   return within(root);
// };

test("renders correct content", () => {
  const { getByText } = render(<App />);

  expect(getByText("Signup Form")).not.toBeNull();
  expect(getByText("SIGN UP")).not.toBeNull();
  // expect(getByText("Show")).not.toBeNull();
  expect(getByText("Password")).not.toBeNull();
});
