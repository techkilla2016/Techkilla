import React, { useState, useEffect } from "react";
import "./price.scss";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import BillingInfoComponent from "./billingComponent";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import LeftPriceContainer from "./leftContainer/index";
import RightPriceContainer from "./rightContainer/index";

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
const paymentImages = [
  "/events/price-page/icons-01.png",
  "/events/price-page/icons-03.png",
  "/events/price-page/icons-04.png",
  "/events/price-page/icons-05.png",
  "/events/price-page/icons-08.png",
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

const DEFAULT_ORDER_SUMMARY_ITEMS = [
  "No Watermark",
  "HD Image Share",
  "Access to 10 Templates",
  "Retake & Quick Share",
  "Custom Branding",
  "Multi-Device Support",
];

const DEFAULT_FARE_SUMMARY = {
  baseFare: 0,
  gstFare: 0,
  totalFare: 0,
};

export default function PriceComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userDataSelector = useSelector((data) => data.userData.user);
  const allEventsSelector = useSelector((data) => data.allEvents);

  const [price, setPrice] = useState("$ 4.99");
  const [isMobileView, setIsMobileView] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    pincode: "",
    billingAddress: "",
    isGstRequired: false,
    gstCompanyName: "",
    gstNumber: "",
    gst: false,
  });

  const [userBillingInfo, setUserBillingInfo] = useState();
  const [currentBilling, setCurrentBilling] = useState();
  const [isShowOldBillingInfo, setIsShowOldBillingInfo] = useState();
  const [eventData, setEventData] = useState();
  const [orderSummaryItems, setOrderSummaryItems] = useState(
    DEFAULT_ORDER_SUMMARY_ITEMS
  );
  const [fareSummary, setFareSummary] = useState(DEFAULT_FARE_SUMMARY);
  const [isGetBillingData, setIsGetBillingData] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("credit");
  const [isPayLoading,setIsPayLoading]=useState();

  // mobile view
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  // console.log(isGetBillingData);
  // fetch event data
  useEffect(() => {
    if (searchParams && allEventsSelector?.length > 0) {
      const eventId = searchParams.get("id");
      const event = allEventsSelector.find((event) => event.id === eventId);
      setEventData(event);
      setOrderSummaryItems((prev) =>
        prev.length < 8
          ? [
              `${event.eventPackage.duration} ${
                event.eventPackage.duration > 1 ? "Days" : "Day"
              }`,
              `${event.eventPackage.credits} credits`,
              ...prev,
            ]
          : prev
      );
      setFareSummary({
        baseFare: event?.eventPackage.price,
        gstFare: event?.eventPackage.price * (18 / 100),
        totalFare:
          event?.eventPackage.price + event?.eventPackage.price * (18 / 100),
      });
    }
  }, [searchParams, allEventsSelector]);

  // fetch billingInfo data of particular user
  useEffect(() => {
    const getBillingData = async () => {
      try {
        // console.log("api is calling", process.env.NEXT_PUBLIC_SERVER_BASE_URL);

        let res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/techkilla-billing-info/${userDataSelector?.uid}`
        );
        setUserBillingInfo(res?.data.billingInfo);
        setCurrentBilling(res?.data.billingInfo[0]);
        setIsShowOldBillingInfo(true);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    if (userDataSelector?.uid) {
      getBillingData();
    }
  }, [userDataSelector, isGetBillingData]);

  // handle payment method select
  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  // handle open payment popup
  function openPaymentPopup(paymentGatewayLink) {
    // Set the popup dimensions
    var popupWidth = 460;
    var popupHeight = 580;

    // Get the screen width and height
    var screenWidth =
      window.innerWidth || document.documentElement.clientWidth || screen.width;
    var screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      screen.height;

    // Calculate the center position for the popup
    var left = screenWidth / 2 - popupWidth / 2;
    var top = screenHeight / 2 - popupHeight / 2;

    // Open the centered popup with proper formatting
    var newWindow = window.open(
      paymentGatewayLink,
      "paymentPopup",
      `scrollbars=yes,resizable=no,width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
    );

    // Focus on the new window in case it was blocked
    if (newWindow) {
      newWindow.focus();
    } else {
      alert("Please allow popups for this website");
    }
    setTimeout(()=>{
      setIsPayLoading(false)
    },2000)
  }

  useEffect(() => {
    // console.log(currentBilling);
  }, [currentBilling]);

  // handle confirm and pay
  const handleConfirmAndPay = async (billing) => {
    // console.log(
    //   // userDataSelector,
    //   currentBilling,
    //   // eventData,
    //   billing,
    //   "handle confirm and pay"
    // );
    const billingInfo = currentBilling?._id ? currentBilling : billing;

    if (!userDataSelector?.uid || !billingInfo?._id || !eventData?.id) {
      return router.push("/events");
    }

    if (selectedMethod) {
      setIsPayLoading(true)
      // checking payment method is credit or paypal
      if (selectedMethod === "credit") {
        const data = {
          userFirebaseUid: userDataSelector?.uid,
          billingInfoId: billingInfo?._id,
          eventFirebaseId: eventData?.id,
        };

        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/techkilla-payment/create-order`,
            data
          );

          // console.log(res, "res");

          if (res?.data?.paymentGatewayLink)
            openPaymentPopup(res?.data?.paymentGatewayLink);
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error("Please select another payment method", toastOptions);
      }
    } else {
      toast.error("Please select a payment method", toastOptions);
    }
  };

  const formatPriceINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="flex-row-center Price">
      <LeftPriceContainer orderSummaryItems={orderSummaryItems} />

      {/* right-part */}
      {isForm ? (
        <div className="flex-col-center right-section">
          <BillingInfoComponent
            setCurrentBilling={setCurrentBilling}
            currentBilling={currentBilling}
            userBillingInfo={userBillingInfo}
            formData={formData}
            setFormData={setFormData}
            setIsForm={setIsForm}
            isShowOldBillingInfo={isShowOldBillingInfo}
            setIsShowOldBillingInfo={setIsShowOldBillingInfo}
            userDataSelector={userDataSelector}
            setIsGetBillingData={setIsGetBillingData}
            fareSummary={fareSummary}
            handleConfirmAndPay={handleConfirmAndPay}
            isPayLoading={isPayLoading}
          />
        </div>
      ) : (
        <RightPriceContainer
          fareSummary={fareSummary}
          selectedMethod={selectedMethod}
          isMobileView={isMobileView}
          setIsForm={setIsForm}
          handlePaymentMethodSelect={handlePaymentMethodSelect}
          formatPriceINR={formatPriceINR}
        />
      )}
    </div>
  );
}
