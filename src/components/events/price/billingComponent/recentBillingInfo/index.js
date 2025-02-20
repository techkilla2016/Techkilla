import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function RecentBillingInfo({
  userBillingInfo,
  currentBilling,
  fareSummary,
  handleUpdateBillingInfo,
  setIsShowOldBillingInfo,
  handleDelete,
  handleAddressChange,
  handleConfirmAndPay,
}) {
  const formatPriceINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex-col-center recentBillingInfoContainer">
      <div className="flex-col-center recentBillingCardWrapper">
        <p className="billingHeading">Recent Billing Information</p>
        <div className="flex-col-center recentBillingBox">
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
                  <MdEdit
                    className="editIcon"
                    onClick={() => handleUpdateBillingInfo(item._id)}
                  />
                  <MdDelete
                    className="deleteIcon"
                    onClick={() => handleDelete(item._id)}
                  />
                </div>
              </label>
            );
          })}
        </div>
        <div
          onClick={() => setIsShowOldBillingInfo(false)}
          className="add-new-billing"
        >
          + Add New
        </div>
      </div>
      <div className="flex-row-center btnContainer">
        {/* <button className="buttonBilling" onClick={() => setIsForm(false)}>
              CONTINUE
            </button>
            <button
              className="buttonBilling"
              onClick={() => setIsShowOldBillingInfo(false)}
            >
              NEW
            </button> */}
        <p className="priceSummary">
          {formatPriceINR(fareSummary.baseFare)}
          <br /> +{formatPriceINR(fareSummary.gstFare)} taxes
        </p>
        <button
          className="buttonBilling"
          onClick={() => handleConfirmAndPay()}
          // style={{ marginTop: "1rem" }}
        >
          {"PAY NOW"}
        </button>
      </div>
    </div>
  );
}
