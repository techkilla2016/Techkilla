"use client";

import React, { useState, useEffect, Suspense } from "react";
import "./paymentAcknowledgement.scss";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import paymentSuccessImg from "@/../public/price-page/price-acknowledgement/payment-success.png";
import paymentFailureImg from "@/../public/price-page/price-acknowledgement/payment-failure.png";
import { allRoutes } from "@/data/allRoutes";

export default function Acknowledgementpage() {
  const [status, setStatus] = useState("");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentAcknowledgementContent status={status} setStatus={setStatus} />
    </Suspense>
  );
}

function PaymentAcknowledgementContent({ status, setStatus }) {
  const searchParams = useSearchParams();
  const stats = searchParams.get("status");

  function refreshParent() {
    window.parent.location = "https://google.com";
  }

  useEffect(() => {
    if (stats === "success") {
      setStatus("success");
    } else {
      setStatus("failure");
    }
  }, [stats]);

  if (stats)
    return (
      <div className="flex-row-center PaymentAcknowledgement">
        <div className="flex-col-center mainContainer">
          <div className="flex-col-center topContainer">
            <div className="flex-col-center acknowledgementIcon">
              <Image
                src={
                  status === "success" ? paymentSuccessImg : paymentFailureImg
                }
                alt="payment-sucess-img"
                width={150}
                height={150}
              />
            </div>
            <h3>{stats === "success" ? "Payment Done!" : "Payment Failed"}</h3>
          </div>

          <p className="txt3 boldTxt">Thank You for Choosing Snapshawt! </p>

          <div className="flex-col-center bottomContainer">
            {status === "success" ? (
              <p className="txt3">
                Your credit purchase was successful! 🎊{" "}
                <strong className="boldTxt">50 credits</strong> have been added
                to your account. Get ready to unleash your creativity and enjoy
                making personalized content with{" "}
                <a
                  href="https://snapshawt.com"
                  target="_blank"
                  className="link"
                >
                  Snapshawt.com
                </a>
                !
              </p>
            ) : (
              <p className="txt3">
                Unfortunately, we were unable to process your payment at this
                time. Please check your details or try another method{" "}
                <strong className="boldTxt">(card, wallet, UPI, etc.)</strong>
              </p>
            )}
          </div>

          <p className="txt3">
            Need assistance? We're here to help! Contact us at &nbsp;
            <a href="mailto:support@snapshawt.com" className="link">
              support@snapshawt.com
            </a>
          </p>

          <p className="txt3 boldTxt">Happy creating!✨</p>

          <button
            className="btn1 goBackBtn"
            onClick={() => {
              opener.location.href =
                `https://snapshawt.com${allRoutes.faceSwap}`;
              self.close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
}
