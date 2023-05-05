import { useState } from "react";
import React from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { signInWithPassword } from "../../auth";

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

  async function onClick(e) {
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

  return (
    <div>
      <h1>hello! here is sign in page!!</h1>
      <Form method="post">
        <div className="e-mail_form">
          <label for="e-mail">enter your e-mail:</label>
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
          <label for="password">enter your password:</label>
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
    </div>
  );
}
