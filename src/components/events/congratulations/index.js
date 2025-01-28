import React, { useEffect, useState } from "react";
import "./congratulation.scss";

const Congratulation = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className={`popup-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <div className="popup-content">
          <h2 style={{ color: "green" }}>Congratulations!</h2>

          <p>Your event has been created successfully.</p>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Congratulation;
