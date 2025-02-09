import React from "react";
import { useState } from "react";
import "./billingForm.scss";
import { toast } from "react-toastify";
import countriesData from "@/data/countries.json";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function BillingInfoForm({
  formData,
  setFormData,
  setIsForm,
  userBillingInfo,
  currentBilling,
  setCurrentBilling,
  isShowOldBillingInfo,
  setIsShowOldBillingInfo,
  userDataSelector,
}) {
  const router = useRouter();
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // for form field
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "contact") {
      // Enforce exactly 10 digits
      if (value.length > 10) {
        return;
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
    console.log(item);
    setCurrentBilling(item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDataSelector) {
      router.push("/events");
      return;
    }
    if (formData.contact.length < 10) {
      console.log("fill all the field");
      toast.warning("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!selectedCountry || !selectedState) {
      console.log("please select country and state");
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

    let res = await axios.post(
      `http://localhost:8000/billing-info/create`,
      data
    );

    console.log(res);
    console.log("Submitted Data:", formData);

    setIsForm(false);
  };

  const handleDelete = async (id) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-col-center billingFormContainer">
      <p className="billingHeading">Billing Info</p>

      {isShowOldBillingInfo &&
      userBillingInfo &&
      userBillingInfo?.length > 0 ? (
        <div className="flex-col-center recentBillingInfoContainer">
          <div className="flex-col-center recentBillingCardWrapper">
            {userBillingInfo.map((item) => {
              return (
                <label
                  key={item.id}
                  htmlFor={`address-${item._id}`}
                  className="flex-row-center recentBillingCard"
                >
                  <input
                    type="radio"
                    name="currentAddress"
                    id={`address-${item._id}`}
                    onChange={() => handleAddressChange(item)}
                    checked={currentBilling?._id == item._id}
                    value={item._id}
                    className="radio"
                  />
                  <div
                    className="flex-col-center billingDetailsContainer"
                    onClick={() => handleAddressChange(item)}
                  >
                    <p className="boxTitleBillingCard">{item.name}</p>
                    <p className="boxBillingAddressName">{item.address}</p>
                  </div>
                  <div className="flex-row-center actionIconContainer">
                    <MdEdit className="editIcon" />
                    <MdDelete className="deleteIcon" />
                  </div>
                </label>
              );
            })}
          </div>
          <div className="flex-col-center btnContainer">
            <button className="buttonBilling" onClick={() => setIsForm(false)}>
              CONTINUE
            </button>
            <button
              className="buttonBilling"
              onClick={() => setIsShowOldBillingInfo(false)}
            >
              NEW
            </button>
          </div>
        </div>
      ) : (
        <form className="flex-col-center billingForm" onSubmit={handleSubmit}>
          <div className="flex-col-center formContainer">
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="inputBilling"
                placeholder="Enter Your name"
                required
              />
            </div>

            {/* contact */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">Contact*</label>
              <input
                type="number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="inputBilling"
                placeholder="Enter Contact Number"
              />
            </div>

            {/* email */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="inputBilling"
                placeholder="Enter Your Email"
              />
            </div>

            {/* billing address */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">Billing Address*</label>
              <textarea
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                required
                className="inputBilling billingAddress"
                placeholder="Enter Billing Address"
              />
            </div>

            {/* country */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">Country*</label>
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                required
                className="inputBilling"
              >
                <option value="">Select Country</option>
                {countriesData.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* state */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">State*</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                required
                className="inputBilling"
              >
                <option value="" className="optionInputBilling">
                  Select State
                </option>
                {states?.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* pin code */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling">Pin Code*</label>
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="inputBilling"
                placeholder="Enter Billing Address Name"
              />
            </div>

            {/* gst bill required */}
            <div className="flex-col-center formFieldBilling">
              <label className="labelBilling checkLabel flex-row-center">
                GST Bill Required?
                <input
                  type="checkbox"
                  name="isGstRequired"
                  checked={formData.isGstRequired}
                  onChange={handleChange}
                  className="inputBillingCheck"
                />
              </label>
            </div>

            {/* gst bill details */}
            {formData.isGstRequired && (
              <>
                <div className="flex-col-center formFieldBilling">
                  <label className="labelBilling">Company Name (GST)*</label>
                  <input
                    type="text"
                    name="gstCompanyName"
                    value={formData.gstCompanyName}
                    onChange={handleChange}
                    required
                    className="inputBilling"
                    placeholder="Enter Gst Company Name"
                  />
                </div>

                <div className="flex-col-center formFieldBilling">
                  <label className="labelBilling">GST Number*</label>
                  <input
                    type="number"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    className="inputBilling"
                    required
                    placeholder="Enter GST Number"
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex-row-center btnContainer">
            <button
              className="buttonBilling"
              type="submit"
              style={{ marginTop: "1rem" }}
            >
              PROCEED TO PAY
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
