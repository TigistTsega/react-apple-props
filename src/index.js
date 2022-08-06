
import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap.css";
import "./css/styles.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
