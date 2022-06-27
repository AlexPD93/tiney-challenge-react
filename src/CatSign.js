import "./CatSign.css";
import React, { useState } from "react";
import SignedIn from "./SignedIn.js";

export default function CatSign(props) {
  const [signIn, setSignIn] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [cat, setCat] = useState(null);
  const [container, setContainer] = useState(null);

  const cats = ["Mittens", "Bao", "Amber", "Tash", "Kasia", "Luna", "Spike"];

  function handleClick(e) {
    if (e.target.innerText === "Sign In") {
      e.target.innerText = "Sign Out";
      e.target.style.background = "#feffff";
      setContainer(e.target.parentNode.children[2]);
      setCat(e.target.parentNode.children[1].innerText);
      setIsShown((current) => !current);
      setSignIn(true);
    } else {
      e.target.innerText = "Sign In";
      e.target.parentNode.children[2].innerText = `Signed Out`;
      e.target.style.background = "#f0677a";
    }
  }

  if (props.dailyLog) {
    return (
      <div className="CatSign">
        <div
          className="catsExpected"
          style={{ display: isShown ? "block" : "none" }}
        >
          You have {cats.length} cats expected today
        </div>
        {cats.map((cat) => {
          return (
            <div
              className="childContainer"
              key={cat}
              style={{ display: isShown ? "flex" : "none" }}
            >
              <img src="/" alt="/"></img>
              <p className="cat"> {cat} </p>
              <p>Signed Out</p>
              <button className={"signInOut"} onClick={handleClick}>
                Sign In
              </button>
            </div>
          );
        })}
        <SignedIn
          signIn={signIn}
          setSignIn={setSignIn}
          cat={cat}
          setIsShown={setIsShown}
          container={container}
        />
      </div>
    );
  } else {
    return null;
  }
}
