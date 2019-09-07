import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import { Provider } from "react-redux";
import store from "./components/ReduxStore/store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
