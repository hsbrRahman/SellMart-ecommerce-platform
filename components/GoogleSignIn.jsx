"use client";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase/firebase.config";
import { provider } from "../firebase/firebase.config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/navigation";
const GoogleSignIn = () => {
  const router = useRouter();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        router.push("/");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    // signInWithRedirect(auth, provider);
  };
  return (
    <div>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default GoogleSignIn;
