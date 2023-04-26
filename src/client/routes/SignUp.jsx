import React from "react";
import { Link, Form } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="sign-up_background">
      <h1>hello! here is sign up page!!</h1>
      <Form method="post">
        <div className="e-mail_form">
          <label for="e-mail">enter your e-mail:</label>
          <input type="email" name="e-mail" id="e-mail" required />
        </div>
        <div className="password_form">
          <label for="password">enter your password:</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Sign Up!</button>
      </Form>
      <p>Already have your account? Let's get in your app page from <Link to={"/"}>here!</Link></p>
    </div>
  );
}
