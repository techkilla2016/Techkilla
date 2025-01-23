import { useState } from "react";
import "./common-panel.scss";

import { FaRegClock } from "react-icons/fa";
import { BsHouse } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

import TimerPopup from "../../modals/timerPopup";

export default function CommonPanel({
  eventData,
  handleLogout,
  setCurrentScreen,
}) {
  const [showPopup, setShowPopup] = useState(false);

  console.log(showPopup);

  return (
    <aside
      className={`common flex-row-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignCommonPanel"
          : "VerticalDesignCommonPanel"
      }`}
    >
      <span
        onClick={() => setCurrentScreen("home")}
        className="flex-row-center icon"
      >
        <BsHouse />
      </span>

      <a
        href="https://snapshawt.com/events"
        target="_blank"
        className="flex-row-center icon"
      >
        <MdOutlineEdit />
      </a>

      <span onClick={() => setShowPopup(true)} className="flex-row-center icon">
        <FaRegClock />
      </span>

      <span onClick={handleLogout} className="flex-row-center icon">
        <IoMdLogOut />
      </span>

      {/* timer popup => clock */}
      {showPopup && (
        <TimerPopup eventData={eventData} setShowPopup={setShowPopup} />
      )}
    </aside>
  );
}
