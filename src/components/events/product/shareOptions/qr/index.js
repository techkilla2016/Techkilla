import React from "react";

export default function Qr({ setShowQrPopup }) {
  return (
    <button onClick={() => setShowQrPopup(true)} className="btnPhotobooth">
      Qr
    </button>
  );
}
