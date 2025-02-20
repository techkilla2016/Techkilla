import { useEffect, useState } from "react";
import "./allEvents.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { db, storage } from "@/firebase-config";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { collection, deleteDoc, doc } from "firebase/firestore";
import DeletePopup from "./deletePopup";

import EventPreviewPopup from "../../../components/events/allEvents/eventPreviewPopup";
import { toast } from "react-toastify";

export default function AllEvents({ data }) {
  const [eventName, setEventName] = useState("");
  const [eventNumber, setEventNumber] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputFocus, setInputFocus] = useState(null);
  const itemsPerPage = 5;

  const formatDate = (timestamp) => {
    if (timestamp && typeof timestamp.toDate === "function") {
      const date = timestamp.toDate();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      let hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
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

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

      // for reset pagination for last page
      const updateData = data.filter((item) => item.id !== eventToDelete);
      const totalPagesAfterDeletion = Math.ceil(
        updateData.length / itemsPerPage
      );
      if (currentPage > totalPagesAfterDeletion) {
        setCurrentPage(totalPagesAfterDeletion);
      }

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
      <p className="flex-row-center tableHead"></p>
      <div className="flex-row-center searchContainer">
        <p className="filterTxt">Filters</p>
        <div className="flex-row-center filterContainer">
          <div className="flex-row-center firstFilter">
            <label className="filter-label">
              Filter by Event Name:
              <input
                className="filter-input"
                type="text"
                value={eventName}
                onFocus={() => setInputFocus("name")}
                onBlur={() => setInputFocus(null)}
                onChange={(e) => {
                  setEventName(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
          </div>

          <div className="flex-row-center secondFilter">
            <label className="filter-label">
              Filter by Event Number:
              <input
                className="filter-input"
                type="text"
                onFocus={() => setInputFocus("number")}
                onBlur={() => setInputFocus(null)}
                value={eventNumber}
                onChange={(e) => {
                  setEventNumber(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex-row-center eventDetail">
        <div className="flex-row-center countPart">
          <p className="eventCount">Total events : 15</p>
          <p className="eventCount">Active events : 2</p>
        </div>

        <div
          className="flex-row-center event-icon"
          onClick={() => router.push("/events/new")}
        >
          <IoAddCircleOutline className="newEvent" />
          <span className="eventText">Create Event</span>
        </div>
      </div>
      <div className="laptop-view">
        <table>
          <thead>
            <tr>
              <th>Event No.</th>
              <th>Event Name</th>
              <th>Product</th>
              <th>Created</th>
              <th>Expires</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {paginatedEvents.length > 0 ? (
              paginatedEvents.map((item) => (
                <tr key={item.id}>
                  <td>#{item.eventNumber}</td>
                  <td>{item.eventName}</td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td>{formatDate(item.expiresAt)}</td>
                  <td>{item.productName}</td>
                  <td className="flex-row-center">
                    <span
                      onClick={() => handlePreview(item)}
                      className="flex-row-center preview-button"
                    >
                      <FaRegEye />
                    </span>
                    <Link
                      href={`/events/pricing?id=${item.id}`}
                      className="flex-row-center launch-button"
                    >
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
              ))
            ) : (
              <tr>
                No Data Found by{" "}
                {inputFocus == "name" ? "Event name" : "Event number"}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex-col-center card-container">
        {paginatedEvents.map((item) => (
          <div key={item.id} className="event-card">
            <h3>{item.eventName}</h3>
            <p>
              <strong>Event No:</strong> #{item.eventNumber}
            </p>
            <p>
              <strong>Product:</strong> {item.productName}
            </p>
            <p>
              <strong>Created:</strong> {formatDate(item.createdAt)}
            </p>
            <p>
              <strong>Expires:</strong> {formatDate(item.expiresAt)}
            </p>
            <div className="card-actions">
              <FaRegEye onClick={() => setSelectedEvent(item)} />
              <Link href={`/events/pricing?id=${item.id}`}>
                <PiRocketLaunch />
              </Link>
              <Link href={`/events/edit?event=${item.eventNumber}`}>
                <MdOutlineModeEdit />
              </Link>
              <MdDeleteOutline onClick={() => setEventToDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex-row-center pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`flex-row-center page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
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
