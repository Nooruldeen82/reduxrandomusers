import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import reducer from "./reducers/rootReducers";
import axios from "axios";
import {
  actionLoading,
  actionSuccess,
  actionFail
} from "./actions/rootActions";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
// store
const logger = createLogger();

// dispatch register Flight

const getUsers = () => {
  return dispatch => {
    // dispatch loading action
    dispatch(actionLoading());
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(res => {
        // dispach success action
        dispatch(actionSuccess(res.data.results));
      })
      .catch(error => {
        // disptch error action
        dispatch(actionFail(error.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(ReduxThunk, logger));
store.dispatch(getUsers());
//const data = store.getState();
const render = () => {
  ReactDOM.render(
    <App users={store.getState()} />,
    document.getElementById("root")
  );
};

store.subscribe(render);
serviceWorker.unregister();

/* 

ReactDOM.render(
  <App data={store.getState()} />,
  document.getElementById("root")
);
*/
