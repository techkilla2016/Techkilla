import React from "react";

export default function Email({ setShowEmailPopup }) {
  return (
    <button onClick={() => setShowEmailPopup(true)} className="btnPhotobooth">
      Email
    </button>
  );
}
