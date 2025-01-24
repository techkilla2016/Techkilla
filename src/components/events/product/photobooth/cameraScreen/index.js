import React, { useState, useEffect, useRef } from "react";
import "./camera-screen-photobooth.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../header";
import Camera from "./camera";

// toast options
const toastOptions = {
  position: "top-left",
  autoClose: 4000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export default function CameraScreen({
  setCurrentScreen,
  setCapturedImg,
  eventData,
}) {
  const camRef = useRef();
  const [screenshot, setScreenshot] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isCounting, setIsCounting] = useState(false);

  // countdown
  useEffect(() => {
    let countdownInterval;

    if (isCounting && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (isCounting && countdown === 0) {
      if (camRef.current.getScreenshot()) {
        setIsCaptured(true);
        setScreenshot(camRef.current.getScreenshot());
      }
      setIsCounting(false);
    }

    return () => clearInterval(countdownInterval);
  }, [isCounting, countdown]);

  // handle capture screenshot
  const handleCapture = (e) => {
    setCountdown(3);
    setIsCounting(true);
  };

  // handle retake screenshot
  const handleRetake = (e) => {
    setIsCaptured(false);
    screenshot && setScreenshot("");
    setCountdown(3);
  };

  // handle submit
  const handleSubmit = () => {
    if (screenshot) {
      setCapturedImg(screenshot);
      setCurrentScreen("templates");
    } else {
      toast.error("Please capture your image", toastOptions);
    }
  };

  return (
    <div
      className={`common flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignCameraScreenPhotobooth"
          : "VerticalDesignCameraScreenPhotobooth"
      }`}
    >
      <Header
        eventData={eventData}
        title={isCaptured ? "DO YOU LIKE THIS ?" : "CAPTURE YOUR FACE"}
      />

      <main className="flex-col-center main">
        {/* camera */}
        <Camera
          camRef={camRef}
          eventData={eventData}
          screenshot={screenshot}
          isCaptured={isCaptured}
          isCounting={isCounting}
          countdown={countdown}
        />

        {/* btns */}
        <div className={`flex-col-center btns`}>
          {isCaptured ? (
            <div className="flex-row-center afterCapture">
              <button
                onClick={(e) => handleRetake(e)}
                className="btnPhotobooth"
              >
                RETAKE
              </button>

              <button onClick={handleSubmit} className="btnPhotobooth">
                SUBMIT
              </button>
            </div>
          ) : (
            <button onClick={(e) => handleCapture(e)} className="btnPhotobooth">
              CAPTURE
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
