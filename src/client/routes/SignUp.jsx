import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth, { signUpWithPassword } from "../../auth";

export default function SignUp() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(dic) {
    setProfile((prev) => {
      return { ...prev, ...dic };
    });
  }

  //This function will handle the submission.
  async function onClick(e) {
    const newProfile = profile;
    // console.log(typeof newProfile);
    const email = newProfile.email;
    const password = newProfile.password;

    console.log(auth);
    signUpWithPassword(email, password, navigate);

    //clear input areas
    setProfile({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="sign-up_background">
      <h1>hello! here is sign up page!!</h1>
      <form>
        <div className="name_form">
          <label for="name">enter your nick name!:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) => handleChange({ name: e.target.value })}
            value={profile.name}
          />
        </div>
        <div className="e-mail_form">
          <label for="email">enter your e-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => handleChange({ email: e.target.value })}
            value={profile.email}
          />
        </div>
        <div className="password_form">
          <label for="password">enter your password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => handleChange({ password: e.target.value })}
            value={profile.password}
          />
        </div>
        <button onClick={onClick} type="button">
          Sign Up!
        </button>
      </form>
      <p>
        Already have your account? Let's get in your app page from{" "}
        <Link to={"/signin"}>here!</Link>
      </p>
    </div>
  );
}
