import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { LuLayoutTemplate } from "react-icons/lu";
import { FcOk } from "react-icons/fc";
import "./testPage.scss";

export default function TestPage() {
  return (
    <div className="flex-col-center TestPage">
      <h2 className="test-head"> Test Your Photobooth</h2>
      <div className="flex-row-center first-container">
        <div className="flex-col-center step-one">
          <div className="flex-col-center text-part">
            <p className="steps">STEP 1</p>
            <p className="selection">Select a Face.</p>
          </div>

          <span className="flex-row-center icon-part">
            <IoCameraOutline className="icon" />
          </span>
        </div>
        <div className="flex-col-center step-one">
          <div className="flex-col-center text-part">
            <p className="steps">STEP 2</p>
            <p className="selection">Select a Template.</p>
          </div>

          <span className="flex-row-center icon-part">
            <LuLayoutTemplate className="icons" />
          </span>
        </div>
        <div className="flex-col-center step-one">
          <div className="flex-col-center text-part">
            <p className="steps">STEP 3</p>
            <p className="selection"> Get results.</p>
          </div>

          <span className="flex-row-center icon-part">
            <FcOk className="icon" />
          </span>
        </div>
      </div>
      <div className="flex-row-center second-container"></div>
    </div>
  );
}
