import { useState, useEffect } from "react";
import "./allEvents.scss";

import Link from "next/link";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { db, storage } from "@/firebase-config";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { collection, deleteDoc, doc } from "firebase/firestore";
import DeletePopup from "./deletePopup";
import EventPreviewPopup from "../../../components/events/allEvents/eventPreviewPopup";

export default function AllEvents({ data }) {
  const [eventName, setEventName] = useState("");
  const [eventNumber, setEventNumber] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const filteredEvents = data.filter((event) => {
    const eventNameMatch = event.eventName
      .toLowerCase()
      .includes(eventName.toLowerCase());
    const eventNumberMatch = event.eventNumber
      .toString()
      .includes(eventNumber.toString());
    return eventNameMatch && eventNumberMatch;
  });

  const confirmDelete = async () => {
    if (!eventToDelete) return;

    try {
      setLoading(true);
      console.log("deleted", eventToDelete);

      const collectionRef = collection(db, "techkilla_events");
      const docRef = doc(collectionRef, eventToDelete);
      await deleteDoc(docRef);

      const imageRef = storageRef(
        storage,
        `techkilla_events_logos/${eventToDelete}`
      );
      await deleteObject(imageRef);

      console.log("Event and logo deleted successfully.");
      setShowConfirmDelete(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setShowConfirmDelete(false);
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setEventToDelete(id);
    setShowConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  const handlePreview = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePreview = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="flex-col-center AllEvents">
      <p className="flex-row-center tableHead">Event Details</p>
      <div className="flex-row-center searchContainer">
        <div className="flex-row-center filterContainer">
          <div className="flex-row-center firstFilter">
            <label className="filter-label">
              Filter by Event Name:
              <input
                className="filter-input"
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </label>
          </div>

          <div className="flex-row-center secondFilter">
            <label className="filter-label">
              Filter by Event Number:
              <input
                className="filter-input"
                type="text"
                value={eventNumber}
                onChange={(e) => setEventNumber(e.target.value)}
              />
            </label>
          </div>
        </div>

        <Link href="/events/new" className="flex-row-center newEvent">
          New Event
        </Link>
      </div>

      <div className="table-wrapper">
        <table className="mainTable">
          <thead>
            <tr className="table-row">
              <th className="table-header">Event No.</th>
              <th className="table-header">Event Name</th>
              <th className="table-header mobile-hide">Created</th>
              <th className="table-header mobile-hide">Expires</th>
              <th className="table-header mobile-hide">Product</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((item) => (
              <tr className="table-row" key={item.id}>
                <td className="table-data">#{item.eventNumber}</td>
                <td className="table-data">{item.eventName}</td>
                <td className="table-data mobile-hide">
                  {formatDate(item.createdAt)}
                </td>
                <td className="table-data mobile-hide">
                  {formatDate(item.expiresAt)}
                </td>
                <td className="table-data mobile-hide">{item.productName}</td>
                <td className="flex-row-center table-action">
                  <span
                    onClick={() => handlePreview(item)}
                    className="flex-row-center preview-button"
                  >
                    <FaRegEye />
                  </span>
                  <Link href="" className="flex-row-center launch-button">
                    <PiRocketLaunch />
                  </Link>

                  <Link
                    href={`/events/edit?event=${item.eventNumber}`}
                    className="flex-row-center edit-button"
                  >
                    <MdOutlineModeEdit />
                  </Link>
                  <span
                    onClick={() => handleDelete(item.id)}
                    className="flex-row-center delete-button"
                  >
                    <MdDeleteOutline />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EventPreviewPopup
        eventData={selectedEvent}
        onClose={handleClosePreview}
      />
      <DeletePopup
        show={showConfirmDelete}
        onConfirm={confirmDelete}
        onCancel={handleCancelDelete}
        loading={loading}
      />
    </div>
  );
}
