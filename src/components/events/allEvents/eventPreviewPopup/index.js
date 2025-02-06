import React from "react";
import "./eventPreviewPopup.scss";
import Image from "next/image";
import { storage } from "@/firebase-config";
import { ref as storageRef, listAll, getDownloadURL } from "firebase/storage";
import JSZip from "jszip";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { saveAs } from "file-saver";
import { MdCancel } from "react-icons/md";
import closeBtn from "@/../public/modals/upgrade-now/close-btn.png";

export default function EventPreviewPopup({ eventData, onClose }) {
  const formatDate = (timestamp) => {
    if (timestamp && typeof timestamp.toDate === "function") {
      const date = timestamp.toDate();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear(); // Full year (e.g., 2025)
      let hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? String(hours).padStart(2, "0") : "12";
      return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
    }
    return "N/A";
  };
  if (!eventData) return null;

  // download folder
  async function downloadFolder(folderPath) {
    const folderRef = storageRef(storage, folderPath);
    try {
      const folderSnapshot = await listAll(folderRef);

      const zip = new JSZip();
      const downloadPromises = folderSnapshot.items.map(async (itemRef) => {
        const fileURL = await getDownloadURL(itemRef);
        const response = await fetch(fileURL);
        const blob = await response.blob();

        zip.file(itemRef.name, blob);
      });

      await Promise.all(downloadPromises);

      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, `${productName}_${eventName}_${eventNumber}.zip`);
    } catch (error) {
      console.error("Error downloading folder:", error);
    }
  }

  const { productName, eventName, eventNumber } = eventData;

  return (
    <div className="flex-row-center modal-overlay">
      <div className="flex-col-center modal-content">
        {/* <p className="eventPre">{eventData.eventName} </p> */}
        <div className="flex-row-center zipContainer">
          <HiOutlineFolderDownload
            onClick={() =>
              downloadFolder(
                `techkilla_events/${productName}/${eventName}_${eventNumber}`
              )
            }
            className="flex-row-center downloadBtn"
          />
        </div>
        {/* <div className="flex-col-center detailCon">
          <a
            href="http://localhost:3000/events/product"
            target="_blank"
            className="flex-row-center modalHead"
            style={{ color: "#7a21bb", textDecoration: "underline" }}
          >
            <strong>http://localhost:3000/events/product</strong>
          </a>
          <p className="flex-row-center modalHead">
            <strong>Event Name : </strong> {eventData.eventName}
          </p>
          <p className="flex-row-center modalHead">
            <strong>Event Number : </strong> {eventData.eventNumber}
          </p>
          <p className="flex-row-center modalHead">
            <strong>Password : </strong> {eventData.password}
          </p>

          <p className="flex-row-center modalHead">
            <strong>Created : </strong> {formatDate(eventData.createdAt)}
          </p>
          <p className="flex-row-center modalHead">
            <strong>Expires : </strong> {formatDate(eventData.expiresAt)}
          </p>
          <p className="flex-row-center modalHead">
            <strong>Product : </strong> {eventData.productName}
          </p>
        </div> */}
        <div className="detailCon">
          <table>
            <tbody>
              <tr>
                <td>URL</td>
                <td>
                  <a
                    href="http://localhost:3000/events/product"
                    target="_blank"
                    style={{ color: "blue ", textDecoration: "underline" }}
                  >
                    http://localhost:3000/events/product
                  </a>
                </td>
              </tr>
              <tr>
                <td>Event Name</td>
                <td>{eventData.eventName}</td>
              </tr>
              <tr>
                <td>Event Number</td>
                <td>{eventData.eventNumber}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{eventData.password}</td>
              </tr>
              <tr>
                <td>Created</td>
                <td>{formatDate(eventData.createdAt)}</td>
              </tr>
              <tr>
                <td>Expires</td>
                <td>{formatDate(eventData.expiresAt)}</td>
              </tr>
              <tr>
                <td>Product</td>
                <td>{eventData.productName}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <button onClick={onClose} className="close-preview">
          Close
        </button> */}
        <div onClick={onClose} className="flex-row-center close-preview">
          <Image src={closeBtn} alt="close" />
        </div>
      </div>
    </div>
  );
}
