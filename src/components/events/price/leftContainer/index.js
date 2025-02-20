import React from "react";
import "./leftPriceContainer.scss";
import PaymentIcons from "../paymentIcons";

export default function LeftPriceContainer({ orderSummaryItems }) {
  return (
    <div className="flex-col-center LeftPriceContainer">
      <h1 className="heading-txt">Techkilla's AI Photobooth</h1>

      <div className="flex-col-center left-content">
        <ul className="flex-col-center list-items-container">
          {orderSummaryItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <ul className="flex-col-center features">
          <li>100% secure payment encryption</li>
          <li>Instant activation</li>
          <li>24/7 technical service</li>
        </ul>

        <PaymentIcons />
      </div>
    </div>
  );
}
