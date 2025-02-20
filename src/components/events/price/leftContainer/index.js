import React from 'react';
import "./leftPriceContainer.scss";
import Image from 'next/image';
import PaymentIconContainer from '../paymentIconContainer';

export default function LeftPriceContainer({orderSummaryItems}) {
  return (
    <div className="flex-col-center left-form-section">
        {/* left-title */}
        <h1 className="heading-txt">Techkilla's AI Photobooth</h1>

        {/* left-content */}
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

          {/* left-icons-container */}
          <PaymentIconContainer />
        </div>
      </div>
  )
}
