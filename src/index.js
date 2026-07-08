import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

// Defer React attach to idle time so the pre-rendered HTML serves as
// FCP/LCP without JS blocking the main thread (reduces TBT to near zero).
// When the root already contains pre-rendered markup (react-snap output),
// hydrate it in place instead of re-rendering — this keeps the greeting
// text painted from FCP (fast LCP) and avoids the layout shift caused by
// wiping and rebuilding the DOM (fixes CLS).
const mount = () => {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement);
  } else {
    ReactDOM.render(<App />, rootElement);
  }
};

if ("requestIdleCallback" in window) {
  requestIdleCallback(mount);
} else {
  setTimeout(mount, 1);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
