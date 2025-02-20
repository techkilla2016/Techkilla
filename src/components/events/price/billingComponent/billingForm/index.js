import React from "react";

export default function BillingForm({
  handleSubmit,
  formData,
  handleChange,
  selectedCountry,
  selectedState,
  handleCountryChange,
  countriesData,
  states,
  isFormUpdate,
  handleCancel,
  fareSummary,
  setSelectedState
}) {
  const formatPriceINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <form className="flex-col-center billingForm" onSubmit={handleSubmit}>
      {/* <div className="flex-col-center billing-form-Wrapper"></div> */}
      <div className="flex-col-center formContainer">
        <p className="billingHeading">Billing Info</p>
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
              name="gst"
              checked={formData.gst}
              onChange={handleChange}
              className="inputBillingCheck"
            />
          </label>
        </div>

        {/* gst bill details */}

        {formData.gst && (
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
                type="text"
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
        {/* {!isFormUpdate && (
          <p className="priceSummary">
            {formatPriceINR(fareSummary.baseFare)}
            <br /> +{formatPriceINR(fareSummary.gstFare)} taxes
          </p>
        )} */}
        {isFormUpdate ? (
          <>
            <button
              className="buttonBilling cancel-btn"
              onClick={() => handleCancel()}
              type="button"
            >
              Cancel
            </button>
            <button type="submit" className="buttonBilling update-btn">
              Update
            </button>
          </>
        ) : (
            <>
            <button type="button" className="buttonBilling cancel-btn" onClick={()=>handleCancel()}>Cancel</button>
          <button
            className="buttonBilling update-btn"
            type="submit"
            // style={{ marginTop: "1rem" }}
            >
            {"Add"}
          </button>
        </>
        )}
      </div>
    </form>
  );
}
