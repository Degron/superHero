import React from "react";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";
import logMessage from "./js/logger";
import TopLevel from "./TopLevel";

// Log message to console
logMessage("A very warm welcome to Heroes!");

//Global Stylesheet
import "./css/style.css";

const render = Component => {
  const root = document.getElementById("root");

  ReactDOM.render(<Component />, root);
};

render(TopLevel);

// Needed for Hot Module Replacement
if (typeof module.hot !== "undefined") {
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
}
