import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import closeBtn from "@/../public/modals/upgrade-now/close-btn.png";
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
    <div className={`popup-overlay ${isOpen ? "show" : ""}`}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <div className="flex-col-center popup-content">
          <div className="flex-col-center img-success">
            <Image
              src="/events/payment-success.png"
              alt="Event Success"
              width={50}
              height={30}
            />
          </div>
          <h2 style={{ color: "green" }}>Congratulations!</h2>

          <p>Your event has been created successfully.</p>
        </div>
        <div className="flex-row-center footer-part">
          <Link href="/events/test-page" className="flex-row-center launch">
            Launch
          </Link>
          <Link href="/events/" className="flex-row-center dashboard">
            Go to Dashboard
          </Link>
        </div>
        {/* <button className="close-btn" onClick={onClose}>
          Close
        </button> */}
        {/* <div onClick={onClose} className="flex-row-center close-preview">
          <Image src={closeBtn} alt="close" />
        </div> */}
      </div>
    </div>
  );
};

export default Congratulation;
