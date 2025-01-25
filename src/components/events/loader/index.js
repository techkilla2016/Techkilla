import React from "react";
import "./loader.scss";

export default function Loader() {
  return (
    <div className="flex-col-center loading-container">
      {/* <p className="loading-text">Loading, please wait...</p> */}
      <div className="loaderEvent">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
