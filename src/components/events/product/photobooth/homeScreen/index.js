import React from "react";
import "./home-screen-photobooth.scss";
import Image from "next/image";

import Header from "../header";
import TemplatesGrid from "../templatesGrid";

export default function HomeScreen({ setCurrentScreen, eventData }) {
  return (
    <div
      className={`common flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignHomeScreenPhotobooth"
          : "VerticalDesignHomeScreenPhotobooth"
      }`}
    >
      {/* header */}
      <Header eventData={eventData} title="AI PHOTO BOOTH" />

      <main className="flex-col-center main">
        {/* templates grid */}
        <TemplatesGrid eventData={eventData} />

        <button
          className="btnPhotobooth"
          onClick={() => setCurrentScreen("camera")}
        >
          Start
        </button>
      </main>
    </div>
  );
}
