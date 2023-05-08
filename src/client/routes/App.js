import React from "react";
import Dashboard from "../components/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../auth";


export default function App() {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("hello!")
    } else {
      // User is signed out
      // console.log("here is false")
      navigate("/signin");
    }
  });
  
  return <Dashboard />
}
