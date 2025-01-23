import { useState } from "react";
import "./share-options.scss";

import Download from "./download";
import Email from "./email";
import Print from "./print";
import Qr from "./qr";
import EmailPopup from "./email/emailPopup";
import QrPopup from "./qr/qrPopup";

export default function ShareOptions({ eventData, outputRef, output }) {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showQrPopup, setShowQrPopup] = useState(false);

  const ShareOptionsComponents = [
    {
      name: "download",
      component: <Download outputRef={outputRef} />,
    },

    {
      name: "email",
      component: <Email setShowEmailPopup={setShowEmailPopup} />,
    },

    {
      name: "print",
      component: <Print outputRef={outputRef} />,
    },

    {
      name: "qr",
      component: <Qr setShowQrPopup={setShowQrPopup} />,
    },
  ];

  return (
    <div
      className={`flex-row-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignShareOptions"
          : "VerticalDesignShareOptions"
      }`}
    >
      {eventData.shareOptions.map((option) => {
        const Component = ShareOptionsComponents.find(
          (item) => item.name === option.toLowerCase()
        );

        if (!Component) {
          console.error(`No component found for option: ${option}`);
          return null;
        }

        return <div key={option}>{Component.component}</div>;
      })}

      {showEmailPopup && (
        <EmailPopup
          eventData={eventData}
          setShowEmailPopup={setShowEmailPopup}
        />
      )}

      {showQrPopup && (
        <QrPopup
          eventData={eventData}
          setShowQrPopup={setShowQrPopup}
          output={output}
        />
      )}
    </div>
  );
}
