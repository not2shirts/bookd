import React from "react";
import { auth } from "../../config/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login({ setShowComponent, setLoggedin }) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);
    console.log(result);

    const user = result.user;

    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (user) {
      setLoggedin(true);
    }
  };

  return (
    <div className="relative">
      <div
        className="absolute right-1 m-2"
        onClick={() => setShowComponent(false)}
      >
        ❌
      </div>
      <h2>Sign in with google</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
