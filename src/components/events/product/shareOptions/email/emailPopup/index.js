import "./email-popup.scss";

import { IoCloseCircleOutline } from "react-icons/io5";

export default function EmailPopup({ eventData, setShowEmailPopup }) {
  return (
    <dialog
      className={`common flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignEmailPopup"
          : "VerticalDesignEmailPopup"
      }`}
    >
      <aside className="flex-col-center emailBox">
        <input className="emailInput" type="email" placeholder="Email" />
        <button className="btnPhotobooth">Send</button>

        <span onClick={() => setShowEmailPopup(false)} className="close">
          <IoCloseCircleOutline />
        </span>
      </aside>
    </dialog>
  );
}
