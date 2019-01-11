import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducers from "./Reducers";
import App from "./js/containers/App";

const store = createStore(combinedReducers);

const TopLevel = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default TopLevel;
