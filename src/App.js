import React from "react";
import Form from "./components/Form";
import "./custom.scss";

function App() {
  return (
    <React.Fragment>
      <main>
        <div className="top-header">
          <h1>
            Fake Science <span>Digest</span>
          </h1>
        </div>
        <div className="container">
          <Form />
        </div>
      </main>
      <footer>
        <p>© 2020 FAKE SCIENCE DIGEST</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
