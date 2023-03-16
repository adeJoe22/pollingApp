import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{padding: 0; margin:0; box-sizing: border-box;}
body{
  background-color: #000000;
  color: #ffffff;
}

`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
