import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import SelectedIntlProvider from "./SelectedIntlProvider";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SelectedIntlProvider>
        <App />
      </SelectedIntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
