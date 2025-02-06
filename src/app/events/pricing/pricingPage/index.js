"use client";

import React, { useState, useRef, useEffect } from "react";
import "./price.scss";
import Head from "next/head";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { PriceSection } from "@/app/redux/slice";
import { ToastContainer, toast } from "react-toastify";

import PriceComponent from "../../../../components/events/price";

// import UserDB from "@/utils/userdb";
// import axios from "axios";
// import ReactGA from "react-ga4";
import { HashLoader, PropagateLoader, PuffLoader } from "react-spinners";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

const content = [
  {
    dt: "How to buy subscription for more credits & features?",
    dd: "To purchase a subscription for additional credits and features, simply navigate to the “price” section in the navigation bar.",
  },
  {
    dt: "Benefits of paid subscription",
    dd: "Paid subscriptions offer access to premium features like unlimited photo uploads, advanced AI enhancements, and exclusive content.",
  },
  {
    dt: "Unable to access premium features",
    dd: "If you're having trouble accessing premium features, ensure your subscription is active and try refreshing the page. Or drop an email to support@snapshawt.com",
  },
  {
    dt: "Payment modes to buy subscription",
    dd: "Snapshawt.com accepts various payment modes including UPI, credit cards, and e-wallets for purchasing subscriptions.",
  },
  {
    dt: "How many devices can be accessed after buying subscription",
    dd: "A single subscription allows access on multiple devices for seamless usage across platforms.",
  },
  {
    dt: "How to check subscription validity",
    dd: "To check your subscription validity, go to your account settings and view the subscription details section.",
  },
];

// toast options
const toastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export default function Price() {
  const loaderSize = 20;
  const [loading, setLoading] = useState(false);

  const priceRef = useRef();
  const [selectedPrice, setSelectedPrice] = useState(-1);
  const dispatch = useDispatch();
  const router = useRouter();
  const [idx, setIdx] = useState();
  const [showDd, setShowDd] = useState(true);

  const override = {
    display: "block",
    borderColor: "white",
    marginRight: "5%",
  };

  // useEffect(() => {
  //   dispatch(PriceSection(priceRef.current));
  // }, [priceRef]);

  const creditsArr = [
    {
      type: "BASIC",
      creditsCount: 50,
      description: [
        "50 Photo to face swap",
        "No Watermark",
        "HD Images",
        "One Photo face swap cost 1 credit",
        "Access to all Templates",
        "Early access to new features",
        "Priority processing",
        "Online Support",
      ],
      price: 2.7,
      bg1: "#054bff",
      bg2: "#52a3f6",
      popular: false,
    },
    /*  {
      type: "PREMIUM",
      creditsCount: 15,
      description: [
        "No watermark",
        "Access to all the templates",
        "Image download in 1080p",
      ],
      price: 95,
      bg1: "#590afc",
      bg2: "#bb7ee1",
      popular: false,
    },
    {
      type: "GOLDEN",
      creditsCount: 30,
      description: [
        "No watermark",
        "Access to all the template",
        "Image download in 1080p",
      ],
      price: 150,
      bg1: "#ff6f00",
      bg2: "#ffc885",
      popular: true,
    }, */
  ];

  return (
    <div ref={priceRef} className="flex-col-center PricePage">
      <PriceComponent />

      <ToastContainer />
    </div>
  );
}
