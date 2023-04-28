import React from "react";
import { Link, Form } from "react-router-dom";

export default function SignIn() {
  
  async function onClick(e) {
    const newProfile = profile;
    // console.log(typeof newProfile);

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

    //clear input areas
    setProfile({
      name: "",
      email: "",
      password: "",
    });

    //navigate user to success page
    navigate("/succeedsignup");
  }


  return (
    <div>
      <h1>hello! here is sign in page!!</h1>
      <Form method="post">
        <div className="e-mail_form">
          <label for="e-mail">enter your e-mail:</label>
          <input type="email" name="e-mail" id="e-mail" required />
        </div>
        <div className="password_form">
          <label for="password">enter your password:</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit" onClick={onClick}>Sign In!</button>
      </Form>
      <p>No account? Let's sign up from <Link to={"/signup"}>here!</Link></p>
    </div>
  );
}
