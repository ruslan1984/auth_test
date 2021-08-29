import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import { Provider } from "react-redux";
import App from "@/App";
import reducer from "@store/reducers";
import { AuthSaga } from "@forms/AuthForm/saga";
import { RegisterSaga } from "@forms/RegisterForm/saga";
import "./styles.css";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield fork(AuthSaga);
  yield fork(RegisterSaga);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
