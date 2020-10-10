import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import App from "./App";
// 路由使用 history模式
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
