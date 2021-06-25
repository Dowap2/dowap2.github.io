import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "./store";

console.log(window.location.href);
if (window.location.href === "https://dowap2.github.io/") {
  window.location.href = "https://dowap2.github.io/main";
}
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en" messages="en">
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
