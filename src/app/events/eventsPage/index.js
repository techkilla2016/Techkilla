"use client";

import { useState, useEffect } from "react";
import "./eventsPage.scss";

import { db } from "@/firebase-config";
import { auth } from "@/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { UserDataReducer, AllEventsReducer } from "@/app/redux/slice";

import Welcome from "@/components/events/welcome";
import AllEvents from "@/components/events/allEvents";
import Login from "@/components/events/login";

export default function EventsPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [allEventsData, setAllEventsData] = useState([]);

  // get user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(UserDataReducer(data));
        setUserData(data);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(userData);

  // get all events
  useEffect(() => {
    if (userData) {
      const collectionRef = collection(db, "snapshawt_events");
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const alldata = snapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((data) => data.userId === userData.uid)
          .sort((a, b) => a.eventNumber - b.eventNumber);

        setAllEventsData(alldata);
        dispatch(AllEventsReducer(alldata));
        console.log(alldata);
      });
      return () => unsubscribe();
    }
  }, [userData]);

  // sign in with google

  return (
    <div className="flex-row-center EventsPage">
      {!userData && !allEventsData && <Login />}

      {userData && allEventsData?.length === 0 && <Welcome />}

      {userData && allEventsData?.length > 0 && <AllEvents />}
    </div>
  );
}
