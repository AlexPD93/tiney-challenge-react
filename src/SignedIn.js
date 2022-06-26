import "./SignedIn.css";
import React, { useState, useEffect } from "react";

export default function SignedIn(props) {
  const [shown, setShown] = useState(true);

  const dateTime = new Date().toLocaleString().split(",").join("").slice(0, 16);

  useEffect(() => {
    props.setIsShown(true);
  }, [shown]);

  function handleClick() {
    setShown((current) => !current);
    props.setSignIn(false);
    props.setDateTime(dateTime);
    props.container.innerText = `Signed in at ${dateTime}`;
  }

  if (props.signIn) {
    return (
      <div className="SignedIn">
        <h2>Sign in</h2>
        <div className="sureSignIn">
          Are you sure you want to sign in {props.cat}?
        </div>
        <p>Date and time:</p>
        <div className="showDateTime">{dateTime}</div>
        <p>
          I'm afraid you can't adjust the time as I haven't learnt how to do
          that yet. So this is as accurate as it gets. Guardians may get a
          notification to acknowledge all sign in/ outs.
        </p>
        <button onClick={handleClick}>Confirm sign in</button>
      </div>
    );
  } else {
    return null;
  }
}
