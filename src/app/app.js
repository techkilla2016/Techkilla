"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import TagManager from "react-gtm-module";

import { db } from "@/firebase-config";
import { auth } from "@/firebase-config";
import { useDispatch } from "react-redux";
import { UserDataReducer, AllEventsReducer } from "@/app/redux/slice";
import { collection, onSnapshot } from "firebase/firestore";

import useCreateUser from "@/customHooks/useCreateUser";

const App = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  // useEffect(()=>{
  //   TagManager.initialize({ gtmId: 'GTM-PVH2G66V' });
  // },[])

  // get user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("running user data change");

        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(UserDataReducer(data));
        setUserData(data);

        console.log(user);

        // create user in mongodb
        const userData = {
          firebaseUid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: user.metadata.createdAt,
          lastLoginAt: user.metadata.lastLoginAt,
        };

        useCreateUser(userData);
      }
    });
    return () => unsubscribe();
  }, []);

  // get all events
  useEffect(() => {
    if (userData) {
      const collectionRef = collection(db, "techkilla_events");
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const alldata = snapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((data) => data.userId === userData.uid)
          .sort((a, b) => a.eventNumber - b.eventNumber);

        dispatch(AllEventsReducer(alldata));
        console.log(alldata, "allEvents data in app.js =>");
      });
      return () => unsubscribe();
    }
  }, [userData]);

  console.log(userData, "userData in app.js =>");

  return <></>;
};

export default App;
