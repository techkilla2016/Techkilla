"use client";

import React, { useState, useEffect, useRef } from "react";
import "./eventForm.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { db, storage } from "@/firebase-config";
import crypto from "crypto";
import Loader from "./../loader/index";

import { resizeImgDimension } from "@/utils/reduceImgDimension";
import { reduceImgSize } from "@/utils/reduceImgSize";

import Header from "@/components/header";
import Congratulation from "@/components/events/congratulations";

import {
  doc,
  collection,
  updateDoc,
  Timestamp,
  runTransaction,
  onSnapshot,
} from "firebase/firestore";

import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Drag from "../../../../public/img-generator/drag.png";
import SelectTemplatesPopup from "@/components/events/newEvent/selectTemplatesPopup";
import { toast, ToastContainer } from "react-toastify";

const data = {
  screenArr: [
    { value: "responsive", label: "iPad, Mobile, Laptop (Responsive)" },
    { value: "vertical", label: "Plasma Screen 1080 × 1920" },
  ],

  bgImagesArr: [
    "https://snapshawt.com/faceSwap/bg.png",
    "https://i.pinimg.com/736x/54/41/0c/54410cf84fc2fba4656fddd91dedc953.jpg",
    "https://i.pinimg.com/736x/54/41/8a/54418ad48edda68710be9a2b7afbeb0d.jpg",
  ],
  shareOptionsArr: ["QR", "email", "print", "download"],
  productsArr: ["photobooth"],
  templateNumberArr: [10],
  durationHour: [1, 2, 3, 4, 5, 6, 7],
  numberOfDevices: [1, 2, 3, 4],
};

const DEFAULT_DATA = {
  eventName: "",
  productName: "",
  screen: "",
  shareOptions: [],
  bgImage: "",
  templateNumber: null,
  templates: [],
  logo: "",
  duration: null,
  numberOfDevices: null,
};

const toastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export default function EventForm({ action }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userDataSelector = useSelector((data) => data.userData.user);
  const allEventsSelector = useSelector((data) => data.allEvents);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [showTemplatePopup, setShowTemplatePopup] = useState(false);
  const [templateError, setTemplateError] = useState("");
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [allTemplatesData, setAllTemplatesData] = useState([]);
  const [templateUpdateStatus, setTemplateUpdateStatus] = useState();
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log(userDataSelector);

  // get all templates
  useEffect(() => {
    const getData = async () => {
      try {
        const collectionRef = collection(db, "events_templates");
        onSnapshot(collectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setAllTemplatesData(data);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  // get all categories
  useEffect(() => {
    const getData = async () => {
      try {
        const collectionRef = collection(db, "events_templates_categories");
        onSnapshot(collectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log(data);
          setAllCategories(data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // time => 2s
  // fetch event data
  useEffect(() => {
    if (searchParams && allEventsSelector?.length > 0) {
      const eventNumber = Number(searchParams.get("event"));
      const event = allEventsSelector.find(
        (event) => event.eventNumber === eventNumber
      );
      if (event && action === "edit") {
        setFormData(event);
      }
    }
  }, [searchParams]);

  // handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = [
      "duration",
      "numberOfDevices",
      "templateNumber",
    ].includes(name)
      ? Number(value)
      : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  console.log(formData);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const shareOptions = checked
        ? [...prev.shareOptions, value]
        : prev.shareOptions.filter((option) => option !== value);
      return { ...prev, shareOptions };
    });
  };

  const handleShowTemplatePopup = () => {
    if (!formData.templateNumber) {
      setTemplateError("Please select a template number before proceeding.");
      return;
    }
    setTemplateError("");
    setShowTemplatePopup(true);
  };

  // generate credentials
  const generatePassword = () => {
    const pass = crypto.randomBytes(3).toString("hex");
    return pass;
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("form submitting", formData);

    // create event
    const createEvent = async () => {
      try {
        const { logo, duration, ...eventData } = formData;

        // firestore references
        const counterDocRef = doc(db, "techkilla_events", "eventCounter");
        const collectionRef = collection(db, "techkilla_events");

        // create a new document reference for the event for unique id
        const newDocRef = doc(collectionRef);

        // run Firestore transaction to get and increment eventNumber
        const newEventNumber = await runTransaction(db, async (transaction) => {
          const counterDoc = await transaction.get(counterDocRef);

          let currentCounter = 0;

          // get the current counter
          if (counterDoc.exists()) {
            currentCounter = counterDoc.data().counter || 0;
          }

          // increment the counter
          const updatedCounter = currentCounter + 1;

          // update the counter in Firestore
          transaction.set(
            counterDocRef,
            { counter: updatedCounter },
            { merge: true }
          );

          // generate password
          const pass = generatePassword();

          // add the new event to the Firestore collection
          transaction.set(newDocRef, {
            ...eventData,
            userId: userDataSelector.uid,
            createdAt: Timestamp.fromDate(new Date()),
            expiresAt: Timestamp.fromDate(
              new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000)
            ),
            eventNumber: updatedCounter,
            password: pass,
          });

          return updatedCounter;
        });

        // upload logo
        if (formData.logo) {
          const logoRef = storageRef(
            storage,
            `techkilla_events_logos/${newDocRef.id}`
          );
          const snapshot = await uploadBytes(logoRef, logo);
          const logoURL = await getDownloadURL(snapshot.ref);

          // console.log("Logo uploaded at URL: ", logoURL);

          // update the Firestore document with the logo URL
          await updateDoc(newDocRef, { logo: logoURL });

          console.log("Document updated with logo URL");
        }
        setIsPopupOpen(true);
        // toast.success("Event created successfully!", toastOptions);
      } catch (e) {
        console.error("Error during event creation: ", e);
        toast.error("Failed to create event. Please try again.", toastOptions);
      } finally {
        setLoading(false);
      }
    };

    // update event
    const updateEvent = async () => {
      try {
        const { logo, duration, ...eventData } = formData;
        // update event
        const collectionRef = collection(db, "techkilla_events");
        const docRef = doc(collectionRef, formData.id);
        await updateDoc(docRef, {
          ...eventData,
        });

        if (formData?.duration) {
          const now = new Date().getTime();
          // console.log('goes inside time secttion update')
          const currentExpiresAt =
            formData.expiresAt instanceof Timestamp
              ? formData.expiresAt.toDate()
              : new Date(formData.expiresAt);

          let baseTime =
            now > currentExpiresAt.getTime() ? now : currentExpiresAt.getTime();
          let newTimeStamp = new Date(
            baseTime + formData.duration * 24 * 60 * 60 * 1000
          );

          await updateDoc(docRef, {
            expiresAt: Timestamp.fromDate(newTimeStamp),
          });
        }

        // update logo
        const isUpdateLogo = typeof formData.logo !== "string";

        if (formData.logo && isUpdateLogo) {
          const logoRef = storageRef(
            storage,
            `techkilla_events_logos/${formData.id}`
          );
          const snapshot = await uploadBytes(logoRef, formData.logo);
          const logoURL = await getDownloadURL(snapshot.ref);

          console.log("Logo updated at URL: ", logoURL);

          // update the Firestore document with the logo URL
          await updateDoc(docRef, { logo: logoURL });

          console.log("Document updated with logo URL");
        }

        // alert("Event updated successfully!");
        toast.success("Event updated successfully!", toastOptions);
      } catch (e) {
        console.error("Error during event updation: ", e);
        // alert("Failed to update event. Please try again.");
        toast.error("Failed to update event. Please try again.", toastOptions);
      } finally {
        setLoading(false);
      }
    };

    // validate logo and templates
    if (!formData.logo)
      return toast.error(
        "Please select a logo before proceeding.",
        toastOptions
      );

    if (
      formData.productName === "photobooth" &&
      formData.templates.length === 0
    )
      return toast.error(
        "Please select a template before proceeding.",
        toastOptions
      );

    if (action === "add") {
      await createEvent();
    } else if (action === "edit") {
      await updateEvent();
    }

    // setTimeout(() => {
    //   router.push("/events");
    //   setLoading(false);
    // }, 2000);
  };

  // trigger file upload
  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input reference is null or undefined.");
    }
  };

  // Handle file select and drop
  const handleFileSelectAndDrop = (event, type) => {
    event.preventDefault();

    console.log(type);

    const file =
      type === "upload" ? event.target.files[0] : event.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      setIsUploading(true);
      let imageFile = file;
      const reader = new FileReader();

      reader.onloadend = async (event) => {
        const img = new window.Image();
        img.src = event.target.result;

        img.onload = async () => {
          try {
            const resizedFile = await resizeImgDimension(imageFile);
            const finalFile = await reduceImgSize(resizedFile, imageFile.size);

            const finalReader = new FileReader();
            finalReader.onloadend = () => {
              setFormData({ ...formData, logo: finalFile });
              setIsUploading(false);
            };

            finalReader.readAsDataURL(finalFile);
          } catch (error) {
            console.error("Error processing image:", error);
            setIsUploading(false);
          }
        };
      };

      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a valid image file.", toastOptions);
    }
  };

  // Function to check if a timestamp is expired
  const isExpired = (timestamp) => {
    if (timestamp && typeof timestamp.toDate == "function") {
      const currentTimestamp = new Date();
      const firebaseTimestamp = timestamp.toDate();
      return currentTimestamp.getTime() > firebaseTimestamp.getTime();
    }
  };

  // Function to convert timestamp to human-readable date and time
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

  return (
    <div className="flex-col-center EventNew">
      <Header />
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="heading">
            {action === "edit" ? "Edit Event" : "Create Event"}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex-col-center formContainer"
          >
            {/* show expires date */}
            {action == "edit" && (
              <div className="flex-col-center valueField">
                <label className="labelling" style={{ color: "red" }}>
                  {formData?.expiresAt && isExpired(formData.expiresAt)
                    ? `Event expired on ${formatDate(
                        formData.expiresAt
                      )}. Extend duration to continue.`
                    : `Your event will expire on  ${formatDate(
                        formData.expiresAt
                      )}`}
                </label>
              </div>
            )}

            {/* event name*/}
            <div className="flex-col-center valueField">
              <label className="labelling">
                Event Name:
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="inputCon"
                  placeholder="Enter event name"
                  required
                  disabled={action === "edit"}
                />
              </label>
            </div>

            {/* product name */}
            <div className="flex-col-center valueField">
              <label className="labelling">
                Choose your Product:
                <select
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="inputCon"
                  required
                >
                  <option value="" disabled>
                    Select Product
                  </option>
                  {data?.productsArr.map((product) => (
                    <option key={product} value={product}>
                      {product.replace(/-/g, " ").charAt(0).toUpperCase() +
                        product.replace(/-/g, " ").slice(1)}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex-col-center valueField">
              <label className="labelling">
                Screen:
                <select
                  name="screen"
                  value={formData.screen}
                  onChange={handleChange}
                  className="inputCon"
                  required
                >
                  <option value="" disabled>
                    Select Screen Type
                  </option>
                  {data?.screenArr.map((screen) => (
                    <option key={screen.value} value={screen.value}>
                      {screen.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* event duration */}
            <div className="flex-col-center valueField">
              <label className="labelling">
                {action === "add"
                  ? "Event Duration:"
                  : `Update Event Duration:`}
                <select
                  value={formData.duration}
                  name="duration"
                  onChange={handleChange}
                  className="inputCon"
                  required={action === "add"}
                >
                  <option value="" disabled selected>
                    {action === "add"
                      ? "Select Event Duration"
                      : "Update Event Duration"}
                  </option>
                  {data?.durationHour.map((screen) => (
                    <option key={screen} value={screen}>
                      {screen} {screen > 1 ? "Day's" : "Day"}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* number of devices */}
            <div className="flex-col-center valueField">
              <label className="labelling">
                Number of Devices:
                <select
                  name="numberOfDevices"
                  value={formData.numberOfDevices}
                  onChange={handleChange}
                  className="inputCon"
                  required
                >
                  <option value="" disabled selected>
                    Select number of devices
                  </option>
                  {data?.numberOfDevices.map((screen) => (
                    <option value={screen}>{screen}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* template number */}
            {formData.productName !== "image-generator" && (
              <div className="flex-col-center valueField">
                <label className="labelling">
                  Template Number:
                  <select
                    name="templateNumber"
                    value={formData.templateNumber}
                    onChange={handleChange}
                    className="inputCon"
                    required
                  >
                    <option value="" disabled selected>
                      Select Template
                    </option>
                    {data?.templateNumberArr.map((templateNumber) => (
                      <option value={templateNumber}>{templateNumber}</option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            {/* template popup */}
            {formData.productName !== "image-generator" && (
              <div className="flex-col-center templateField">
                <button
                  type="button"
                  className="templateBtn"
                  onClick={handleShowTemplatePopup}
                >
                  Select Templates
                </button>
                {templateError && <p className="errorText">{templateError}</p>}

                {formData.templates && formData.templates.length > 0 && (
                  <p className="successText">
                    {formData.templates.length} template(s) selected.
                  </p>
                )}
              </div>
            )}
            {showTemplatePopup && (
              <SelectTemplatesPopup
                setShowTemplatePopup={setShowTemplatePopup}
                templateNumber={formData.templateNumber}
                setFormData={setFormData}
                selectedTemplatesFromProps={formData.templates}
                allTemplatesData={allTemplatesData}
                allCategories={allCategories}
                setAllCategories={setAllCategories}
                setAllTemplatesData={setAllTemplatesData}
              />
            )}
            {/* share options */}
            <div className="flex-col-center shareOption">
              <label className="flex-row-center shareHead">
                Share Options:
              </label>
              <div className="flex-row-center options">
                {data?.shareOptionsArr.map((option) => (
                  <label key={option} className="flex-row-center checkboxLabel">
                    <input
                      type="checkbox"
                      value={option}
                      className="flex-row-center checkboxInput"
                      checked={formData.shareOptions.includes(option)}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkboxText">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* logo upload */}
            <div
              className="flex-col-center logoUploader"
              onDrop={(event) => handleFileSelectAndDrop(event, "drop")}
              onDragOver={(e) => e.preventDefault()}
            >
              <label
                htmlFor="fileInput"
                className=" flex-col-center logoUploadLabel"
              >
                <p className="flex-row-center uploadText">Upload Logo:</p>
                <div className="logoContainer">
                  {isUploading ? (
                    <div className="flex-col-center loaderContainer">
                      <div className="spinLoader"></div>
                    </div>
                  ) : formData.logo ? (
                    <div>
                      <img
                        src={
                          typeof formData.logo === "string"
                            ? formData.logo
                            : URL.createObjectURL(formData.logo)
                        }
                        alt="Uploaded Logo"
                        className="uploadedImage"
                      />
                      <div className="flex-col-center addNewFace">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            triggerFileUpload();
                          }}
                          className="plusIconButton"
                        >
                          <Image
                            src={Drag}
                            alt="Add New Logo"
                            width={24}
                            height={24}
                            className="imgPlusIcon"
                          />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-col-center addNewFace">
                      <p className="flex-row-center orText">
                        Drag & Drop your Logo here
                      </p>
                      <p className="flex-row-center orText">OR</p>
                      <label htmlFor="fileInput" className="fileInputLabel">
                        Choose a file
                      </label>
                    </div>
                  )}
                </div>
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                id="fileInput"
                onChange={(event) => handleFileSelectAndDrop(event, "upload")}
                style={{ display: "none" }}
              />
            </div>

            {/* Background Images */}
            <div className="flex-col-center imageContainer">
              <p className="bg-head">Background Images:</p>
              <div className="flex-row-center bgImgContainer">
                {data?.bgImagesArr.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setFormData({ ...formData, bgImage: src });
                    }}
                    className={`bgImg ${
                      formData.bgImage === src ? "selected" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`bgImage-${idx}`}
                      width={50}
                      height={50}
                      className="imageCon"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* submit button */}
            <div className="flex-col-center submitContainers">
              <button type="submit" className="flex-row-center submitBtn">
                {action === "edit" ? "UPDATE" : "SUBMIT"}
              </button>
            </div>
          </form>
          <Congratulation
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        </>
      )}

      <ToastContainer />
    </div>
  );
}
