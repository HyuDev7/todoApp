import React from "react";
import { userSignOut,checkAuth } from "../../../auth";
import { useNavigate } from "react-router-dom";

function Greeting() {
  // const navigate = useNavigate()

  // checkAuth(navigate)

  function onClick() {
    userSignOut();
    // navigate("/signin");
  }

  return (
    <div className="upcoming-tasks col-lg-6 mb-4">
    <div className="board scroll upcoming-board p-3">
      <h1>Hi! How are you doing?</h1>
      <p>
        Welcome back. We are happy to see you again.<br></br>
        Inspire your work, leave your acheivement.
      </p>
      <figcaption>
        —Tony Robbins,{" "}
        <cite>The only impossible journey is the one you never begin.</cite>
      </figcaption>
      <button
        type="button"
        onClick={onClick}
        className="me-4 btn btn-dark list-border"
      >
        Sign out
      </button>
    </div>
    </div>
  );
}

export default Greeting;
