import React, { useState, useEffect } from "react";
import "./price.scss";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import BillingInfoForm from "./billingForm";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const paymentMethods = [
  {
    id: "credit",
    label: "UPI/ Credit/ Debit Card",
    images: [
      "/price-page/icons-01.png",
      "/price-page/icons-03.png",
      "/price-page/icons-05.png",
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
  const [isForm, setIsForm] = useState(true);
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

  // mobile view
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
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
        let res = await axios.get(
          `http://localhost:8000/billing-info/${userDataSelector?.uid}`
        );
        setUserBillingInfo(res?.data.billingInfo);
        setCurrentBilling(res?.data.billingInfo[0]);
        setIsShowOldBillingInfo(true);
        console.log(res);
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
  }

  // handle confirm and pay
  const handleConfirmAndPay = async () => {
    console.log(
      userDataSelector,
      currentBilling,
      eventData,
      "handle confirm and pay"
    );

    if (!userDataSelector?.uid || !currentBilling?._id || !eventData?.id) {
      return router.push("/events");
    }

    if (selectedMethod) {
      // checking payment method is credit or paypal
      if (selectedMethod === "credit") {
        const data = {
          userFirebaseUid: userDataSelector?.uid,
          billingInfoId: currentBilling?._id,
          eventFirebaseId: eventData?.id,
        };

        try {
          const res = await axios.post(
            "http://localhost:8000/techkilla-payment/create-order",
            data
          );
          console.log(res);

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

  return (
    <div className="flex-row-center payment-section">
      {/* left-part */}
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
        </div>
      </div>

      {/* right-part */}
      {isForm ? (
        <div className="flex-col-center right-section">
          <BillingInfoForm
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
          />
        </div>
      ) : (
        <div className="flex-col-center right-section">
          <div className="flex-col-center payment-method">
            <p className="right-heading-txt">Payment method</p>
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
            <div className="flex-col-center bill-section">
              <div className="flex-row-center total-bill-container borderBottom">
                <p className="totalTxt">Subtotal</p>
                <p className="totalTxt">{price}</p>
              </div>
              <div className="flex-row-center total-bill-container ">
                <p className="totalCostTxt">Total Cost</p>
                <p className="totalCostTxt">{price} </p>
              </div>
            </div>
          </div>

          <div className="flex-col-center rightBottomContainer">
            <button className="confirm-btn" onClick={handleConfirmAndPay}>
              Confirm and pay
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
          </div>
        </div>
      )}

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
    </div>
  );
}
