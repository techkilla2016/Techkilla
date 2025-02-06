import React, { useState, useEffect } from "react";
import "./price.scss";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
// import UserDB from "@/utils/userdb";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import BillingInfoForm from "./billingForm";
import { useSelector } from "react-redux";

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

const orderSummaryItems = [
  "50 Credit",
  "1 Day",
  "No Watermark",
  "HD Image Share",
  "Access to 10 Templates",
  "Retake & Quick Share",
  "Custom Branding",
  "Multi-Device Support",
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

export default function PriceComponent() {
  const router = useRouter();
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
    // gstCompanyAddress: "",
    gstNumber: "",
  });

  const [userBillingInfo, setUserBillingInfo] = useState();
  const userDataSelector = useSelector((data) => data.userData.user);
  const [currentBilling, setCurrentBilling] = useState();
  const [isShowOldBillingInfo, setIsShowOldBillingInfo] = useState();

  // useEffect(() => {
  //   const getBillingData = async () => {
  //     console.log(userDataSelector, "user data");
  //     try {
  //       let res = await axios.get(
  //         `${process.env.SERVER_BASE_URL}/billing-info/getAllByUserid/${userDataSelector?._id}`
  //       );
  //       setUserBillingInfo(res.data);
  //       setCurrentBilling(res?.data[0]);
  //       setIsShowOldBillingInfo(true);
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   if (userDataSelector?._id) {
  //     getBillingData();
  //   }
  // }, [userDataSelector]);

  // // mobile view
  // const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  // useEffect(() => {
  //   if (UserDB.isUserIndian()) setPrice("INR 399");
  //   else setPrice("$ 4.99");

  //   setIsMobileView(isMobile);
  // }, [isMobile]);

  // // update it for each payment
  // let paymentGatewayLink = "";
  // const [selectedMethod, setSelectedMethod] = useState("credit");

  // const handlePaymentMethodSelect = (method) => {
  //   setSelectedMethod(method);
  // };

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

  const handleConfirmAndPay = () => {
    const user = UserDB.getUser();

    if (!user) {
      router.push("/signin?path=%2Fpricing");
      return;
    }

    if (selectedMethod) {
      // checking payment method is credit or paypal
      if (selectedMethod === "credit") {
        // it is for fast empty popup loading
        openPaymentPopup(paymentGatewayLink);

        const data = {
          userId: user._id,
          amount: "399",
          name: user._id,
          MUID: "MUID" + Date.now(),
          transactionId: "T" + Date.now(),
        };

        axios
          .post("https://snapshawt.in" + "/payment/post", data)
          .then((response) => {
            // if (response.status == 200) setLoading(false);
            // console.log(response.data)
            openPaymentPopup(response.data);
          })
          .catch((error) => {
            // setLoading(false);
            console.log(error);
          });
      } else {
        // paymentGatewayLink = "paypal-link";
        toast.error("Please select another payment method", toastOptions);
      }

      // openPaymentPopup(paymentGatewayLink);
    } else {
      toast.error("Please select a payment method", toastOptions);
    }
  };

  return (
    <div className="flex-row-center payment-section">
      {/* left-part */}
      <div className="flex-col-center left-form-section">
        {/* left-title */}
        <div className="flex-row-center premium-icon-container">
          <div className="flex-row-center premium-icon">
            <Image
              src="/logo/logo-01.png"
              alt="price-icon"
              width={150}
              height={150}
            />
          </div>
          <h1 className="heading-txt">Techkilla's AI Photobooth</h1>
        </div>

        {/* left-content */}
        <div className="flex-col-center left-content">
          <ul className="flex-col-center list-items-container">
            {orderSummaryItems.map((item, index) => (
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
    </div>
  );
}
