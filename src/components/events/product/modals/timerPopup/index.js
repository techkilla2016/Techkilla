import React, { useEffect, useState } from "react";
import "./timerPopupProduct.scss";
import { ClockLoader } from "react-spinners";
import { IoMdCloseCircle } from "react-icons/io";

export default function TimerPopup({ eventData, setShowPopup }) {
  const [timeLeft, setTimeLeft] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getRemainingTime();
      setTimeLeft(remaining);
      if (remaining?.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventData?.expiresAt]);

  const getRemainingTime = () => {
    const expiresTimestamp = eventData?.expiresAt.toDate().getTime();
    const total = expiresTimestamp - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / 1000 / 60 / 60);
    console.log(hours, minutes);
    return { total, hours, minutes, seconds };
  };

  if (timeLeft?.total <= 0) {
    return (
      <div className="flex-col-center eventCountdownProduct">
        <IoMdCloseCircle className="closeIcon" />
        <p>The event has expired!</p>
      </div>
    );
  }

  return (
    <div
      className={`flex-col-center 
      ${
        eventData.screen == "responsive"
          ? "eventCountdownProductResponsive"
          : "eventCountdownProductVertical"
      }`}
    >
      <IoMdCloseCircle
        className="closeIcon"
        onClick={() => setShowPopup(false)}
      />
      {!timeLeft ? (
        <ClockLoader />
      ) : (
        <div className="flex-col-center countdownBox">
          <p className="paraTime">
            {timeLeft?.hours}H : {timeLeft?.minutes}M : {timeLeft?.seconds}S
          </p>
        </div>
      )}
    </div>
  );
}
