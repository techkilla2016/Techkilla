import { useEffect, useState } from "react";
import "./photobooth-common-design.scss";

import HomeScreen from "./homeScreen";
import CameraScreen from "./cameraScreen";
import TemplatesScreen from "./templatesScreen";
import OutputScreen from "./outputScreen";
import ExpiredPopupProduct from "./expiredPop";
import CommonPanel from "./commonPanel";

export default function PhotoboothEvent({ eventData, handleLogout }) {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [capturedImg, setCapturedImg] = useState("");
  const [output, setOutput] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [isReminder, setIsReminder] = useState(false);
  const [reminderTitle, setReminderTitle] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      const { hours, total, minutes, seconds } = getRemainingTime(
        eventData?.expiresAt
      );
      setIsExpired(false);
      if (minutes == 30 && seconds == 0) {
        setIsReminder(true);
        setReminderTitle("Your event will expire in 30 minutes!");
      } else if (minutes == 15 && seconds == 0) {
        console.log("will expires in 15 min");
        setReminderTitle("Your event will expires in 15 minutes!");
        setIsReminder(true);
      } else if (minutes == 10 && seconds == 0) {
        console.log("will expires in 10 min");
        setReminderTitle("Your event will expires in 10 minutes!");
        setIsReminder(true);
      } else if (minutes == 5 && seconds == 0) {
        console.log("will expires in 5 min");
        setReminderTitle("Your event will expires in 5 minutes!");
        setIsReminder(true);
      } else if (total <= 0) {
        setIsExpired(true);
        setIsReminder(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventData?.expiresAt]);

  const getRemainingTime = (expiresAt) => {
    const expiresTimestamp = expiresAt.toDate().getTime();
    const total = expiresTimestamp - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / 1000 / 60 / 60);
    return { total, hours, minutes, seconds };
  };

  return (
    <div
      style={
        eventData.bgImage
          ? { background: `url(${eventData.bgImage}) center / cover  repeat` }
          : {}
      }
      className={`commonForSinglePageApp ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignPhotobooth"
          : "VerticalDesignPhotobooth"
      }`}
    >
      {/* common panel */}
      <CommonPanel
        eventData={eventData}
        handleLogout={handleLogout}
        setCurrentScreen={setCurrentScreen}
      />

      {/* home screen */}
      {currentScreen === "home" && (
        <HomeScreen setCurrentScreen={setCurrentScreen} eventData={eventData} />
      )}

      {/* camera screen */}
      {currentScreen === "camera" && (
        <CameraScreen
          setCurrentScreen={setCurrentScreen}
          setCapturedImg={setCapturedImg}
          eventData={eventData}
        />
      )}

      {/* templates screen */}
      {currentScreen === "templates" && (
        <TemplatesScreen
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
          eventData={eventData}
          capturedImg={capturedImg}
          setOutput={setOutput}
          setSelectedTemplate={setSelectedTemplate}
          selectedTemplate={selectedTemplate}
        />
      )}

      {/* output screen */}
      {currentScreen === "output" && (
        <OutputScreen
          eventData={eventData}
          setCurrentScreen={setCurrentScreen}
          output={output}
          setOutput={setOutput}
          capturedImg={capturedImg}
          selectedTemplate={selectedTemplate}
        />
      )}

      {isExpired && (
        <div className="expiredPopup">
          <ExpiredPopupProduct
            title={"Your event is Expired!"}
            eventData={eventData}
          />
        </div>
      )}

      {isReminder && (
        <div className="expiredPopup">
          <ExpiredPopupProduct
            title={reminderTitle}
            component={"reminder"}
            onClose={setIsReminder}
            eventData={eventData}
          />
        </div>
      )}
    </div>
  );
}
