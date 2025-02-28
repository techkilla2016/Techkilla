import React, { useEffect } from "react";
import { useState } from "react";
import "./billingForm.scss";
import { toast } from "react-toastify";
import countriesData from "@/data/countries.json";
import axios from "axios";
import { useRouter } from "next/navigation";
import RecentBillingInfo from "./recentBillingInfo/index";
import BillingForm from "./billingForm/index";

export default function BillingInfoComponent({
  formData,
  setFormData,
  setIsForm,
  userBillingInfo,
  currentBilling,
  setCurrentBilling,
  isShowOldBillingInfo,
  setIsShowOldBillingInfo,
  userDataSelector,
  setIsGetBillingData,
  fareSummary,
  handleConfirmAndPay,
  isPayLoading,
}) {
  const router = useRouter();
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [isFormUpdate, setIsFormUpdate] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isAddLoading, setIsAddLoading] = useState(false);

  // for form field
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "contact") {
      // Enforce exactly 10 digits
      if (value.length > 10) {
        setErrorMsg("Please enter a valid 10-digit mobile number");
      } else {
        setErrorMsg("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setSelectedCountry(value);
    const countryData = countriesData.find((c) => c.name === value);
    setStates(countryData ? countryData.states : []);
  };

  // handle address change
  const handleAddressChange = (item) => {
    setCurrentBilling(item);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userDataSelector) {
      router.push("/events");
      return;
    }
    if (formData.contact.length < 10 || formData.contact.length > 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number");
      return;
    } else {
      setErrorMsg("");
    }

    if (!selectedCountry || !selectedState) {
      toast.warning("Please Select Country or State!");
      return;
    }

    if (formData.gst) {
      if (!formData.gstCompanyName || !formData.gstNumber) {
        toast.warning("Please Add GST Info");
        return;
      }
    }

    const data = {
      userFirebaseUid: userDataSelector?.uid,
      name: formData.name,
      phone: formData.contact,
      email: formData.email,
      address: formData.billingAddress,
      country: selectedCountry,
      state: selectedState,
      pin: formData.pincode,
      isGst: formData.gst,
    };

    if (formData.gst) {
      /* data.companyNameAsPerGst = formData.gstCompanyName;
      data.gstNumber = Number(formData.gstNumber); */

      data.gstInfo = {
        gstNumber: formData.gstNumber,
        companyName: formData.gstCompanyName,
      };
    }
    setIsAddLoading(true);
    // update form
    if (isFormUpdate) {
      try {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/techkilla-billing-info/update/${formData._id}`,
          data
        );
        setIsShowOldBillingInfo(true);
        toast.success("Billing details updated successfully!");
        setIsFormUpdate(false);
        setCurrentBilling(res.data.billingInfo);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/techkilla-billing-info/create`,
          data
        );
        // console.log(res);
        toast.success("New billing details added successfully!");
        setCurrentBilling(res.data.billingInfo);
        // handleConfirmAndPay(res.data.billingInfo);
        // setIsForm(false);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log("Submitted Data:", formData);
    setIsGetBillingData((prev) => !prev);
    setFormData({
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
    setSelectedCountry("");
    setSelectedState("");
    setStates([]);
    setIsAddLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/techkilla-billing-info/delete/${id}`
      );
      setIsGetBillingData((prev) => !prev);
      toast.success("Billing address deleted successfully!");
      setCurrentBilling(res?.data.billingInfo[0]);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // handle update billing info
  const handleUpdateBillingInfo = async (id) => {
    setIsShowOldBillingInfo(false);
    setIsFormUpdate(true);
    const foundData = userBillingInfo?.find((item) => item._id == id);
    const countryData = countriesData.find(
      (c) => c.name === foundData?.country
    );

    setStates(countryData ? countryData.states : []);
    setSelectedState(foundData.state);
    setSelectedCountry(foundData.country);

    let data = {
      name: foundData.name,
      contact: foundData.phone,
      email: foundData.email,
      _id: foundData._id,
      billingAddress: foundData.address,
      gst: foundData.isGst,
      pincode: foundData.pin,
    };

    setFormData({
      ...data,
      isGstRequired: foundData?.gst,
      gstCompanyName: foundData?.gstInfo?.companyName,
      gstNumber: foundData?.gstInfo?.gstNumber,
    });
  };

  const formatPriceINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleCancel = () => {
    setIsFormUpdate(false);
    setFormData({
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
    setSelectedCountry("");
    setSelectedState("");
    if (userBillingInfo?.length > 0) {
      setIsShowOldBillingInfo(true);
    } else {
      setIsForm(false);
    }
  };

  // console.log(errorMsg);

  return (
    <div className="flex-col-center billingFormContainer">
      {isShowOldBillingInfo &&
      userBillingInfo &&
      userBillingInfo?.length > 0 ? (
        <RecentBillingInfo
          userBillingInfo={userBillingInfo}
          currentBilling={currentBilling}
          fareSummary={fareSummary}
          handleUpdateBillingInfo={handleUpdateBillingInfo}
          setIsShowOldBillingInfo={setIsShowOldBillingInfo}
          handleDelete={handleDelete}
          handleAddressChange={handleAddressChange}
          handleConfirmAndPay={handleConfirmAndPay}
          isPayLoading={isPayLoading}
        />
      ) : (
        <BillingForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          selectedCountry={selectedCountry}
          selectedState={selectedState}
          handleCountryChange={handleCountryChange}
          countriesData={countriesData}
          states={states}
          isFormUpdate={isFormUpdate}
          handleCancel={handleCancel}
          fareSummary={fareSummary}
          setSelectedState={setSelectedState}
          errorMsg={errorMsg}
          isAddLoading={isAddLoading}
        />
      )}
    </div>
  );
}
