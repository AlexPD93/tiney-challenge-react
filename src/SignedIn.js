import "./SignedIn.css";
import React, { useState, useEffect } from "react";
import ChildrenSign from "./ChildrenSign";

export default function SignedIn(props) {
  console.log(props);
  const [shown, setShown] = useState(true);
  const cat = props.cat;
  console.log(cat);

  const state = new Date().toLocaleString().split(",").join("").slice(0, 16);

  useEffect(() => {
    props.setIsShown(true);
  }, [shown]);

  function handleClick() {
    setShown((current) => !current);
  }

  if (props.signIn) {
    return (
      <div className="SignedIn" style={{ display: shown ? "block" : "hidden" }}>
        <h2>Sign in</h2>
        <div className="sureSignIn">
          Are you sure you want to sign in {props.cat}?
        </div>
        <p>Date and time:</p>
        <div className="showDateTime">{state}</div>
        <p>
          I'm afraid you can't adjust the time as I haven't learnt how to do
          that yet. So this is as accurate as it gets. Guardians may get a
          notification to acknowledge all sign in/ outs.
        </p>
        <button onClick={handleClick}>Confirm sign in</button>
        {<ChildrenSign date={state} />}
      </div>
    );
  } else {
    return null;
  }
}
