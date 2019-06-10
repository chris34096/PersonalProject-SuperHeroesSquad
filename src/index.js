import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import { addCharacterById } from "./actions";

const store = createStore(rootReducer);
console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharacterById(2));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
