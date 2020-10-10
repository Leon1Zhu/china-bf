import React from "react";
import useSWR from "swr";
import { host } from "../utils/utils";
import "./baike.scss";

function BaikePage() {
  const { data } = useSWR(`${host}/getCatalog`);
  console.log(data);
  return (
    <div className="baike-page">
      <div className="left-menu">111</div>
      <div className="right-content">111</div>
    </div>
  );
}

export default BaikePage;
