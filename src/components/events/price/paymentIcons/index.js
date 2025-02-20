import React from "react";
import "./payment-icons.scss";
import Image from "next/image";

export default function PaymentIcons() {
  const paymentImages = [
    "/events/price-page/icons-01.png",
    "/events/price-page/icons-03.png",
    "/events/price-page/icons-04.png",
    "/events/price-page/icons-05.png",
    "/events/price-page/icons-08.png",
  ];
  return (
    <div className="flex-row-center left-icons-container">
      {paymentImages.map((image, index) => (
        <div key={index} className="payment-icon">
          <Image
            src={image}
            width={150}
            height={150}
            alt={`Payment method ${index + 1}`}
            className={index === 4 ? "paypal-icon" : "payment-icon"}
          />
        </div>
      ))}
    </div>
  );
}
