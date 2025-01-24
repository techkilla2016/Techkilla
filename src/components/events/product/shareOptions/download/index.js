import React from "react";

import exportAsImage from "@/utils/exportAsImage";

export default function Download({ outputRef }) {
  // download image
  const downloadImage = () => {
    const today = new Date();
    const formatDateTime = (date) =>
      [
        String(date.getDate()).padStart(2, "0"),
        String(date.getMonth() + 1).padStart(2, "0"),
        date.getFullYear(),
        String(date.getHours()).padStart(2, "0"),
        String(date.getMinutes()).padStart(2, "0"),
        String(date.getSeconds()).padStart(2, "0"),
      ].join("-");

    const fullDateTime = formatDateTime(today);

    exportAsImage(outputRef.current, `snapshawt-image ${fullDateTime}`);
  };

  return (
    <button onClick={downloadImage} className="btnPhotobooth">
      Download
    </button>
  );
}
