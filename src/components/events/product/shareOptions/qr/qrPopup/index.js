import "./qr-popup.scss";

import QRCode from "react-qr-code";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function QrPopup({ eventData, setShowQrPopup, output }) {
  return (
    <dialog
      className={`common flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignQrPopup"
          : "VerticalDesignQrPopup"
      }`}
    >
      <aside className="flex-col-center qrBox">
        {true && <QRCode size={256} value={output.url} id="qr" />}

        <span onClick={() => setShowQrPopup(false)} className="close">
          <IoCloseCircleOutline />
        </span>
      </aside>
    </dialog>
  );
}
