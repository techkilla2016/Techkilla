"use client";

import React, { useState } from "react";
import Congratulation from "@/components/events/congratulations";

export default function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div
      className="flex-row-center"
      style={{ flexDirection: "column", gap: "20px" }}
    >
      <button
        onClick={handleOpenPopup}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Show Congratulations
      </button>
      <Congratulation isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}
