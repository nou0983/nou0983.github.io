import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { setCurrentUser } from "./actions";
import jwtDecode from "jwt-decode";
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

if (localStorage.token) {
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
