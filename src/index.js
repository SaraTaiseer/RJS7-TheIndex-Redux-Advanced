import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { fetchAllAuthors, fetchAllBooks } from "./reduxNew/actions";
import App from "./App";
import store from "./reduxNew";

store.dispatch(fetchAllAuthors());
store.dispatch(fetchAllBooks());
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
