import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  /* apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID, */
  apiKey: "AIzaSyBCNkMhtuf3sJybWFn-Fn_rWLfEIJ-R-n4",
  authDomain: "techkilla-events.firebaseapp.com",
  projectId: "techkilla-events",
  storageBucket: "techkilla-events.firebasestorage.app",
  messagingSenderId: "489779279733",
  appId: "1:489779279733:web:b116001fdaff850d9a053c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
