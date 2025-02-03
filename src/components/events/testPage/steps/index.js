import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { LuLayoutTemplate } from "react-icons/lu";
import { FcOk } from "react-icons/fc";
import "./steps.scss";

export default function Steps() {
  const stepsData = [
    { step: 1, text: "Select a Face.", Icon: IoCameraOutline },
    { step: 2, text: "Select a Template.", Icon: LuLayoutTemplate },
    { step: 3, text: "Get results.", Icon: FcOk },
  ];

  return (
    <div className="flex-col-center Steps">
      <h2 className="test-head">Test Your Photobooth</h2>
      <div className="flex-row-center first-container">
        {stepsData.map(({ step, text, Icon }) => (
          <div key={step} className="flex-col-center step-one">
            <div className="flex-col-center text-part">
              <h1 className="steps">STEP {step}</h1>
              <p className="selection">{text}</p>
            </div>
            <span className="flex-row-center icon-part">
              <Icon className="icon" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
