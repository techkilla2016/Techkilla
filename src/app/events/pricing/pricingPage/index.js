"use client";

import React, { useRef } from "react";
import "./pricing.scss";
import { ToastContainer } from "react-toastify";

import PriceComponent from "../../../../components/events/price";

export default function Price() {
  const priceRef = useRef();

  return (
    <div ref={priceRef} className="flex-col-center PricePage">
      <PriceComponent />

      <ToastContainer />
    </div>
  );
}
