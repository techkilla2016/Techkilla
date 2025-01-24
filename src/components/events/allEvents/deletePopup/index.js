import React from "react";
import "./deletePopup.scss";

export default function DeletePopup({ onConfirm, onCancel, show }) {
  if (!show) return null;

  return (
    <div className="flex-row-center DeleteContainer">
      <div className="flex-col-center confirm-modal-content">
        <h3>Are you sure you want to delete this event?</h3>
        <div className="flex-row-center buttonContainer">
          <button onClick={onConfirm} className="confirm-delete">
            Yes, Delete
          </button>
          <button onClick={onCancel} className="cancel-delete">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
