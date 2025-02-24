"use client";

import React, { useState, useEffect, Suspense } from "react";
import "./paymentAcknowledgement.scss";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import paymentSuccessImg from "../../../../../public/events/price-page/price-acknowledgement/payment-success.png";
import paymentFailureImg from "../../../../../public/events/price-page/price-acknowledgement/payment-failure.png";
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
      <>
        <Header />
        <div className="flex-row-center PaymentAcknowledgement">
          <div className="flex-col-center mainContainerAcknow">
            <div className="flex-col-center topContainerAcknow">
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
              <h3>
                {stats === "success" ? "Payment Done!" : "Payment Failed"}
              </h3>
            </div>

            <div className="flex-col-center bottomContainerAcknow">
              {status === "success" ? (
                <div className="txt3">
                  🎉 Congratulations! Your{" "}
                  <strong>Techkilla event experience</strong> is locked in. Get
                  ready for an unforgettable engagement! 🚀🔥 Start creating
                  your events now!
                  {/* <a
                    href="https://snapshawt.com"
                    target="_blank"
                    className="link-new"
                  >
                    Snapshawt.com
                  </a>
                  ! */}
                  <p className="txt3 ">Happy creating!✨</p>
                </div>
              ) : (
                <div className="txt3">
                  <strong> Oops!</strong> Something went wrong with your
                  Techkilla event purchase. 😢 Try again or reach out—we’re here
                  to help! 💡 Start creating your events now!{" "}
                </div>
              )}
            </div>

            <div className="txt3">
              💡 Need assistance? We’re here to help—reach out at &nbsp;
              <a href="mailto:support@snapshawt.com" className="link-new">
                contact@techkilla.com
              </a>
            </div>

            <button
              className=" goBackBtn"
              onClick={() => {
                if (window.opener) {
                  window.opener.location.href = "https://techkilla.com/events";
                  window.close();
                } else {
                  window.location.href = "https://techkilla.com/events";
                }
              }}
            >
              Close
            </button>
          </div>
        </div>
      </>
    );
}
