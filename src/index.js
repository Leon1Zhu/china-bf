import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./iconFont.css";
import "./reset.css";
import App from "./App";
// 路由使用 history模式
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App Route={Route} />
  </BrowserRouter>,
  document.getElementById("root")
);
