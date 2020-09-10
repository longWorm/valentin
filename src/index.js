import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let app = document.getElementById("root");

if (app) {
  // 1. Set up the browser history with the updated location
  // (minus the # sign)
  const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }

  // 2. Render our app
  ReactDOM.render(<App />, app);
}

serviceWorker.unregister();
