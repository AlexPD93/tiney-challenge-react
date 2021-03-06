import "./SignedIn.css";
import React, { useState, useEffect } from "react";

export default function SignedIn({
  signIn,
  setSignIn,
  cat,
  setIsShown,
  container,
}) {
  const [shown, setShown] = useState(true);

  const dateTime = new Date().toLocaleString().split(",").join("").slice(0, 16);

  //Change setIsShown to true without reloading the page
  useEffect(() => {
    setIsShown(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]); //Shown is the dependancy (When shown changes the useEffect runs)

  //Line 18 is to debug a deploy issue(netlify)

  function handleClick() {
    //This line sets 'setShown' to the opposite of what it is. Here it goes from true to false. Shown has now changed, useEffect is called.
    setShown((current) => !current);
    //Doesn't display the sign in page with date and time but returns null
    setSignIn(false);
    container.innerText = `Signed in at ${dateTime}`;
  }

  if (signIn) {
    return (
      <div className="SignedIn">
        <h2>Sign in</h2>
        <div className="sureSignIn">
          Are you sure you want to sign in {cat}?
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
