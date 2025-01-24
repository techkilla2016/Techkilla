import { useState } from "react";
import "./templates-grid-photobooth.scss";

import { SiTicktick } from "react-icons/si";

import Grid10 from "./grid-10";
import Grid08 from "./grid-08";

export default function TemplatesGrid({
  eventData,
  currentScreen,
  selectedTemplate,
  setSelectedTemplate,
}) {
  // overlay component
  const OverLayComponent = ({ template }) => {
    if (currentScreen === "templates") {
      return (
        <div
          onClick={() => setSelectedTemplate(template)}
          className={`flex-row-center overlay ${
            selectedTemplate.id === template.id ? "showOverlay" : ""
          }`}
        >
          <SiTicktick />
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      {Number(eventData.templateNumber) === 10 && (
        <Grid10
          eventData={eventData}
          setSelectedTemplate={setSelectedTemplate}
          OverLayComponent={OverLayComponent}
        />
      )}

      {Number(eventData.templateNumber) === 8 && (
        <Grid08 eventData={eventData} currentScreen={currentScreen} />
      )}
    </>
  );
}
