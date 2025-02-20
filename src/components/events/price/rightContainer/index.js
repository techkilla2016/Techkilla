import React from "react";
import "./rightPriceContainer.scss";
import Image from "next/image";
import Link from "next/link";
import PaymentIconContainer from "../paymentIconContainer/index";

export default function RightPriceContainer({
  fareSummary,
  selectedMethod,
  isMobileView,
  setIsForm
}) {
  const paymentMethods = [
    {
      id: "credit",
      label: "UPI/ Credit/ Debit Card",
      images: [
        "/events/price-page/icons-01.png",
        "/events/price-page/icons-03.png",
        "/events/price-page/icons-05.png",
        // "/price-page/icons-04.png",
      ],
    },
    // {
    //   id: "paypal",
    //   label: "PayPal",
    //   images: ["/price-page/icons-08.png"],
    // },
  ];

  return (
    <div className="flex-col-center right-section">
      {/* fare summary*/}
      <div className="flex-col-center fareSummaryContainer">
        <h1 className="summary-heading-txt">Fare Summary</h1>
        <div className="flex-col-center fareSummary">
          <p className="flex-row-center fareTxt">
            <span>Base Fare</span>
            <strong>₹{fareSummary.baseFare}</strong>
          </p>
          <p className="flex-row-center fareTxt">
            <span>Taxes (18% GST)</span> <strong>₹{fareSummary.gstFare}</strong>
          </p>
          <p className="flex-row-center totalFareTxt">
            <span>Grand Total</span> <strong>₹{fareSummary.totalFare}</strong>
          </p>
        </div>
      </div>

      <div className="flex-col-center payment-method">
        {/* <p className="right-heading-txt">Payment method</p> */}
        <div className="flex-col-center payment-methods-container">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              onClick={() => handlePaymentMethodSelect(method.id)}
              className="flex-row-center payment-method-item"
            >
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                checked={selectedMethod === method.id}
              />

              <label className="flex-row-center payment-label">
                <p className="labelTxt">{method.label}</p>

                <div className="flex-row-center payment-icons-container">
                  {method.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="flex-row-center payment-icon"
                      style={
                        isMobileView && imgIndex === 1
                          ? { display: "none" }
                          : {}
                      }
                    >
                      <Image
                        src={image}
                        alt={`${method.label}-icon`}
                        className={
                          method.id === "paypal"
                            ? "paypal-icon"
                            : "payment-icon"
                        }
                        width={150}
                        height={150}
                      />
                    </div>
                  ))}
                </div>
              </label>
            </div>
          ))}
        </div>
        {/* <div className="flex-col-center bill-section">
              <div className="flex-row-center total-bill-container borderBottom">
                <p className="totalTxt">Subtotal</p>
                <p className="totalTxt">{fareSummary.baseFare}</p>
              </div>
              <div className="flex-row-center total-bill-container ">
                <p className="totalCostTxt">Total Cost</p>
                <p className="totalCostTxt">{fareSummary.totalFare} </p>
              </div>
            </div> */}
      </div>

      <div className="flex-col-center rightBottomContainer">
        <button className="confirm-btn" onClick={() => setIsForm(true)}>
          {/* <button className="confirm-btn" onClick={handleConfirmAndPay}> */}
          PROCEED TO PAY
        </button>
        <p className="confirm-pay-section">
          By clicking "Confirm and pay" you agree to our &nbsp;
          <Link
            target="_blank"
            href="https://snapshawt.com/terms-conditions"
            className="terms-of-use"
          >
            Terms and Conditions
          </Link>
        </p>
        <ul className="flex-col-center features">
          <li>100% secure payment encryption</li>
          <li>Instant activation</li>
          <li>24/7 technical service</li>
        </ul>

        {/* left-icons-container */}
        <PaymentIconContainer />
      </div>
    </div>
  );
}
