import React from "react";

function Greeting() {
  return (
    <div className="greeting-board board col-sm-6 col-lg-6 p-3 mb-4">
      <h1>Hi Hyu!</h1>
      <p>
        Welcome back Hyu. We are happy to see you again.<br></br>
        Inspire your work, leave your acheivement.
      </p>
      <figcaption>—Tony Robbins, <cite>The only impossible journey is the one you never begin.</cite></figcaption>
      {/* <button type="button" class="me-4 btn btn-dark list-border">
        View your tasks
      </button>
      <button type="button" class="btn btn-dark list-border">
        View timeline
      </button> */}
    </div>
  );
}

export default Greeting;
