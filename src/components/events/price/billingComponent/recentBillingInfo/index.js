import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {ClockLoader} from "react-spinners"

export default function RecentBillingInfo({
  userBillingInfo,
  currentBilling,
  fareSummary,
  handleUpdateBillingInfo,
  setIsShowOldBillingInfo,
  handleDelete,
  handleAddressChange,
  handleConfirmAndPay,
  isPayLoading
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
        <p className="billingHeading">Billing Info</p>
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
                  <p className="boxTitleBillingCard">
                    {item.name.length > 20
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </p>
                  <p className="boxBillingAddressName">
                    {item.address.length > 25
                      ? item.address.slice(0, 25) + "..."
                      : item.address}
                  </p>
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
          <br /> + {formatPriceINR(fareSummary.gstFare)} taxes
        </p>
        <button className="flex-row-center buttonBilling" onClick={() => handleConfirmAndPay()}>
          {"PAY NOW"} {isPayLoading && <ClockLoader color="white" size={17} />}
        </button>
      </div>
    </div>
  );
}
