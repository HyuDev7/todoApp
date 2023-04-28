import React from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessSignUp() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/todo");
  }, 1500);

  return (
    <>
      <h1>Success for sign up!</h1>
      <p>your going to app page sooooon</p>
    </>
  );
}
