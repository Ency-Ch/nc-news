import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container mt-2 rounded">
      {" "}
      <App />{" "}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
