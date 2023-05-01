import { useState } from "react";
import React from "react";
import { Link, Form, useNavigate, redirect } from "react-router-dom";

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
    const newQuery = query;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuery),
      });

      if (!response.ok) {
        const message = `an error occurred : ${response.statusText}`;
        window.alert(message);
        return;
      }

      const result = await response.json();
      // console.log(result);

      // console.log(query);

      e.preventDefault();

      if (result.status === 1) {
        navigate("/todo");
      } else if (result.status === 0) {
        // console.log("you got redirected");
        //clear input areas
        setQuery({
          email: "",
          password: "",
        });
        window.alert("I'm sorry. Please enter your email or password again...");
        return redirect("/signin");
      }

      // console.log(await response.json());
    } catch (error) {
      window.alert(error);
      return;
    }
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
