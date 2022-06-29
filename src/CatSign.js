import "./CatSign.css";
import React, { useState } from "react";
import SignedIn from "./SignedIn.js";
import whiteCat from "./Pics/whiteCat.jpg";
import spotty from "./Pics/spotty.jpg";
import small from "./Pics/small.jpg";
import clouded from "./Pics/cloudedleopard.jpg";
import leopard from "./Pics/leopard.jpg";
import tiger from "./Pics/tiger.jpg";
import whiteTiger from "./Pics/whiteTiger.jpg";

export default function CatSign(props) {
  const [signIn, setSignIn] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [cat, setCat] = useState(null);
  const [container, setContainer] = useState(null);

  const cats = ["Mittens", "Bao", "Amber", "Tash", "Kasia", "Luna", "Spike"];
  const photoArray = [
    whiteCat,
    spotty,
    small,
    clouded,
    leopard,
    tiger,
    whiteTiger,
  ];

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
        {cats.map((cat, index) => {
          return (
            <div
              className="childContainer"
              key={cat}
              style={{ display: isShown ? "flex" : "none" }}
            >
              <img className="catPic" src={photoArray[index]} alt="Cat"></img>
              <p className="cat"> {cat} </p>
              <p className="status">Signed Out</p>
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
