import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(dic) {
    setProfile((prev) => {
      return { ...prev, ...dic };
    });
  }

  //This function will handle the submission.
  async function onClick(e) {
    const newProfile = profile;
    console.log(typeof newProfile);
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfile),
      });

      if (!response.ok) {
        const message = `an error occurred : ${response.statusText}`;
        window.alert(message);
        return;
      }
    } catch (error) {
      window.alert(error);
      return;
    }

    e.preventDefault();

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
