import { useState } from "react";
import "./templates-screen-photobooth.scss";

import useSwapPhoto from "@/customHooks/events/photobooth/useSwapPhoto";
import useUploadOutputFirebase from "@/customHooks/events/uploadOutputFirebase";

import Header from "../header";
import TemplatesGrid from "../templatesGrid";

// toast options
const toastOptions = {
  position: "top-center",
  autoClose: 4000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export default function TemplatesScreen({
  currentScreen,
  setCurrentScreen,
  eventData,
  capturedImg,
  selectedTemplate,
  setSelectedTemplate
}) {
  // const [selectedTemplate, setSelectedTemplate] = useState("");

  // handle submit
  const handleSubmit = async () => {
    // setOutput({});

    if (!capturedImg) return alert("Please capture your image");
    if (!selectedTemplate) return alert("Please select a template");

    try {
      // const outputImg = await useSwapPhoto(capturedImg, selectedTemplate);
      // const outputUrl = await useUploadOutputFirebase(outputImg, eventData);

      // setOutput({
      //   img: `data:image/webp;base64,${outputImg}`,
      //   url: outputUrl,
      // });
      setCurrentScreen("output");
    } catch (error) {
      console.error("Error occurred during axios request:", error);
    }
  };

  return (
    <div
      className={`common flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignTemplatesScreenPhotobooth"
          : "VerticalDesignTemplatesScreenPhotobooth"
      }`}
    >
      <Header eventData={eventData} title={"SELECT TEMPLATES"} />

      <main className="flex-col-center main">
        <TemplatesGrid
          eventData={eventData}
          currentScreen={currentScreen}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />

        <button onClick={handleSubmit} className="btnPhotobooth">
          SELECT
        </button>
      </main>
    </div>
  );
}
