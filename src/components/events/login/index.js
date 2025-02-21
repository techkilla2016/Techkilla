import { useState } from "react";

import { auth } from "@/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./login.scss";
import { FcGoogle } from "react-icons/fc";

export default function Login({ userData, setUserData }) {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  console.log(userData);

  // handle login
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User data stored in Firestore.", result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   {!userData && (
    //     <div>
    //       <h1>Login with Google</h1>
    //       <button
    //         onClick={handleLogin}
    //         className="btn btn-primary rounded-5 fw-semibold"
    //       >
    //         Sign in with Google
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="flex-col-center LoginComp">
      <p className="flex-row-center head1">
        Make Every Event <br /> Unforgettable!
      </p>
      <p className="head2">
        Book a photobooth for your event and capture <br />
        memories that last a lifetime.
      </p>
      <button onClick={handleLogin} className="flex-row-center googleLogin">
        <FcGoogle className="google-logo" /> Continue with Google
      </button>
    </div>
  );
}
