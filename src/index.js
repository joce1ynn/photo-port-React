import React from "react";
import ReactDOM from "react-dom";
// The react-dom package serves as the entry point to the DOM to render the JSX by using the virtual DOM.

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

//index.js file as the main entry point for the application.
