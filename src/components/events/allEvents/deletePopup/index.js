import React from "react";
import "./deletePopup.scss";
import Loader from "./../../loader/index";

export default function DeletePopup({ onConfirm, onCancel, show, loading }) {
  if (!show) return null;

  return (
    <div className="flex-row-center DeleteContainer">
      {/* <Loader /> */}
      <div className="flex-col-center confirm-modal-content">
        <h3>Are you sure?</h3>

        {loading ? (
          <div className="flex-row-center loader-container">
            <div className="spinLoader"></div>
          </div>
        ) : (
          <div className="flex-row-center buttonContainer">
            <button onClick={onConfirm} className="confirm-delete">
              Yes, Delete
            </button>
            <button onClick={onCancel} className="cancel-delete">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
