import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import SelectedIntlProvider from "./SelectedIntlProvider";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SelectedIntlProvider>
      <App />
    </SelectedIntlProvider>
  </Provider>
);
