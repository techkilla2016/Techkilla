import React from "react";
import Steps from "../../../components/events/testPage/steps";
import FaceSwap from "../../../components/events/testPage/faceSwap";
import "./testPage.scss";

export default function TestPage() {
  return (
    <div className="flex-col-center TestPage">
      <Steps />
      <FaceSwap />
    </div>
  );
}
