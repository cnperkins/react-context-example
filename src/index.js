import React from "react";
import ReactDOM from "react-dom";
import { MyContext } from "./contexts/main";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MyContext.Provider value={{ count: 1 }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider>,
  rootElement
);

//challenge:create method to update home count at global state
