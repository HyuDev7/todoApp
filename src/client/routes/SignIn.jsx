import { useState } from "react";
import React from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import {
  signInWithPassword,
  signInWithGoogleAccount,
  signInWithGoogleAccountRedirecting,
  checkAuth,
} from "../../auth";

export default function SignIn() {
  const navigate = useNavigate();

  const [query, setQuery] = useState({
    email: "",
    password: "",
  });

  function handleChange(dic) {
    setQuery((prev) => {
      return { ...prev, ...dic };
    });
  }

  function onClick(e) {
    e.preventDefault();

    const newQuery = query;
    const email = newQuery.email;
    const password = newQuery.password;

    signInWithPassword(email, password, navigate);

    //clear input areas
    setQuery({
      email: "",
      password: "",
    });
  }

  function signInWithGoogle(e) {
    e.preventDefault();
    // signInWithGoogleAccountRedirecting();
    signInWithGoogleAccount();
    checkAuth(navigate);
    // console.log(checkAuth(navigate));
  }

  return (
    <div>
      <h1>hello! here is sign in page!!</h1>
      <Form method="post">
        <div className="e-mail_form">
          <label htmlFor="e-mail">enter your e-mail:</label>
          <input
            type="email"
            name="e-mail"
            id="e-mail"
            value={query.email}
            onChange={(e) => handleChange({ email: e.target.value })}
            required
          />
        </div>
        <div className="password_form">
          <label htmlFor="password">enter your password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={query.password}
            onChange={(e) => handleChange({ password: e.target.value })}
            required
          />
        </div>
        <button type="button" onClick={onClick}>
          Sign In!
        </button>
      </Form>
      <p>
        No account? Let's sign up from <Link to={"/signup"}>here!</Link>
      </p>
      <p>want to log in with your google account? push the button!</p>
      <button type="button" onClick={signInWithGoogle}>
        sign in with google
      </button>
    </div>
  );
}
