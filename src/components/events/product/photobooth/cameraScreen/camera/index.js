import "./camera-photobooth.scss";
import Image from "next/image";

import Webcam from "react-webcam";

export default function Camera({
  camRef,
  screenshot,
  isCaptured,
  isCounting,
  countdown,
  eventData,
}) {
  return (
    <div
      className={`flex-row-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignCameraPhotobooth"
          : "VerticalDesignCameraPhotobooth"
      }`}
    >
      {/* cam */}
      {!screenshot && (
        <Webcam ref={camRef} id="cam" forceScreenshotSourceSize={true} />
      )}

      {/* countdown */}
      {!isCaptured && isCounting && (
        <span className="countdown">{countdown}</span>
      )}

      {/* screenshot */}
      {screenshot && (
        <Image
          src={screenshot}
          alt="captured image"
          className="screenshot"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
