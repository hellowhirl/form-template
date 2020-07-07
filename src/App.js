import React from "react";
import Form from "./components/Form";
import "./custom.scss";

function App() {
  return (
    <main>
      <div className="top-header">
        <h1>
          Science <span>Digest</span>
        </h1>
      </div>
      <div className="container">
        <Form />
      </div>
      <footer></footer>
    </main>
  );
}

export default App;
