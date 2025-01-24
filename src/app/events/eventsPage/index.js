"use client";

import { useState, useEffect } from "react";
import "./eventsPage.scss";

import { db } from "@/firebase-config";
import { auth } from "@/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";

import { useDispatch } from "react-redux";
import { UserDataReducer, AllEventsReducer } from "@/app/redux/slice";
import { ToastContainer } from "react-toastify";

import Header from "@/components/header";
import Welcome from "@/components/events/welcome";
import AllEvents from "@/components/events/allEvents";
import Login from "@/components/events/login";

export default function EventsPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [allEventsData, setAllEventsData] = useState([]);

  // run 1st api => 2s
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

  // run 2nd api => 2s
  // get all events
  useEffect(() => {
    if (userData) {
      console.log("trying to get all events");

      const collectionRef = collection(db, "techkilla_events");
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

  // handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserData(null);
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="flex-row-center EventsPage">
      <Header />
      {!userData && <Login userData={userData} setUserData={setUserData} />}

      {userData && allEventsData?.length === 0 && <Welcome />}

      {userData && allEventsData?.length > 0 && (
        <AllEvents data={allEventsData} />
      )}

      {/* logout */}
      {userData && (
        <div className="logout">
          <p>Welcome, {userData.displayName}</p>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
