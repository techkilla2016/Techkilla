"use client";
import React, { useEffect, useState } from "react";
import "./commonForAllProducts.scss";

import { v4 as uuidv4 } from "uuid";

import { db } from "@/firebase-config";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";

import PhotoboothEvent from "@/components/events/product/photobooth";
import EventAuth from "@/components/events/product/eventAuth";

export default function Product() {
  const [eventData, setEventData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [authFormData, setAuthFormData] = useState({});

  // get or create device id
  function getOrCreateDeviceId() {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  }

  // handle logout
  const handleLogout = () => {
    setAuthFormData(null);
    safeLogoutFromOnSnapshot();
  };

  // safeLogoutFromOnSnapshot
  const safeLogoutFromOnSnapshot = async () => {
    console.log("handle logout called");
    const deviceId = getOrCreateDeviceId();
    console.log(deviceId);
    try {
      const docRef = doc(db, "techkilla_events", eventData.id);

      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const { devices } = docSnapshot.data();
        console.log("Current devices:", devices);
        // Remove the device ID
        if (devices && devices.includes(deviceId)) {
          console.log("working");

          await updateDoc(docRef, {
            devices: arrayRemove(deviceId),
          });
          setAuthFormData(null);
          setIsLoggedIn(false);
          console.log("Device removed successfully.");
        } else {
          console.log("Device ID not found in the array.");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle login
  useEffect(() => {
    const handleLogin = async () => {
      if (eventData) {
        console.log("handle login running");

        // check if password is correct
        if (authFormData?.password !== eventData.password) {
          alert("Invalid password");
          return false;
        }

        // check if device id exists
        const deviceId = getOrCreateDeviceId();

        const devices = eventData.devices || [];
        const noOfDevices = eventData.numberOfDevices;

        console.log(deviceId, devices, noOfDevices);

        if (devices.includes(deviceId)) {
          setIsLoggedIn(true);
          console.log("already logged in");

          return true;
        } else if (devices.length < noOfDevices) {
          try {
            // add device id to event
            const collectionRef = collection(db, "techkilla_events");
            const docRef = doc(collectionRef, eventData.id);

            await updateDoc(docRef, {
              devices: arrayUnion(deviceId),
            });

            console.log("Device added successfully.");
            setIsLoggedIn(true);
            setAuthFormData(null);
            return true;
          } catch (error) {
            console.log(error);
            return false;
          }
        } else {
          console.log("Max number of devices reached");
          alert("You have reached the maximum number of devices");
          return false;
        }
      }
    };

    if (Object.keys(eventData).length !== 0 && authFormData !== null) {
      handleLogin();
    } else {
      // alert("Event data not found");
    }
  }, [eventData]);

  // get event data according to event number getting from url and match with templates and update the event data
  const getEventDataAndCheckAuth = async (authFormData) => {
    if (authFormData) {
      const templatesCollectionRef = collection(db, "events_templates");
      const eventsCollectionRef = collection(db, "techkilla_events");

      let unsubscribeEvents;
      let unsubscribeTemplates;

      console.log("getEventDataAndCheckAuth called");

      const fetchEventAndTemplates = async () => {
        let eventData = null;
        let templates = [];

        // subscribe to events
        try {
          unsubscribeEvents = onSnapshot(eventsCollectionRef, (snapshot) => {
            eventData = snapshot.docs
              .map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }))
              .find((e) => e.eventNumber === Number(authFormData.eventNumber));

            if (eventData && templates.length > 0) {
              updateEventData(eventData, templates);
            }
          });
        } catch (err) {
          console.log(err);
        }

        // subscribe to templates
        try {
          unsubscribeTemplates = onSnapshot(
            templatesCollectionRef,
            (snapshot) => {
              templates = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));

              if (eventData && templates.length > 0) {
                updateEventData(eventData, templates);
              } else {
                alert("event not found");
              }
            }
          );
        } catch (err) {
          console.log(err);
        }

        // update event data
        const updateEventData = (eventData, templates) => {
          const updatedTemplates = eventData.templates.map((templateId) => {
            return templates.find((template) => template.id === templateId);
          });

          setEventData({ ...eventData, templates: updatedTemplates });
        };
      };

      fetchEventAndTemplates();

      // Cleanup subscriptions
      return () => {
        if (unsubscribeEvents) unsubscribeEvents();
        if (unsubscribeTemplates) unsubscribeTemplates();
      };
    }
  };

  /*   useEffect(() => {
    let cleanup;
    const authFormData = {};
    if (authFormData) {
      cleanup = getEventDataAndCheckAuth(authFormData);
    }
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
 */
  console.log(eventData, "event data");

  return (
    <div>
      {/* event auth */}
      {!isLoggedIn && eventData && (
        <EventAuth
          isProductLoading={isProductLoading}
          getEventDataAndCheckAuth={getEventDataAndCheckAuth}
          setAuthFormData={setAuthFormData}
        />
      )}

      {/* photobooth */}
      {isLoggedIn && eventData.productName === "photobooth" && (
        <PhotoboothEvent eventData={eventData} handleLogout={handleLogout} />
      )}
    </div>
  );
}
