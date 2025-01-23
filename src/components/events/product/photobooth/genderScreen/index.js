import React from "react";

export default function GenderScreen({ setCurrentScreen }) {
  return (
    <div>
      GenderScreen
      <button onClick={() => setCurrentScreen("template")}>Next</button>
    </div>
  );
}
