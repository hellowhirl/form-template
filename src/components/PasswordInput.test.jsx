import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";

test("it works", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("h2").textContent).toBe("Signup Form");
});
