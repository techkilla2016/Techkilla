import { useState } from "react";

import { auth } from "@/firebase-config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export default function Login({ userData, setUserData }) {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  console.log(userData);

  // handle login
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log("User data stored in Firestore.");
    } catch (error) {
      console.error(error.message);
    }
  };

  // handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {userData ? (
        <div>
          <h1>Welcome, {userData.displayName}</h1>
          <p>Email: {userData.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login with Google</h1>
          <button
            onClick={handleLogin}
            className="btn btn-primary rounded-5 fw-semibold"
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}
