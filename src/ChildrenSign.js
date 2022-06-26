import "./ChildrenSign.css";
import React, { useState } from "react";

export default function ChildrenSign({ children }) {
  const [buttonText, setButtonText] = useState("Sign In");
  function handleClick() {
    setButtonText("Sign Out");
  }

  return (
    <div className="ChildrenSign">
      {children.map((child) => {
        return (
          <div className="childContainer" key={child}>
            <img src="/" alt="/"></img>
            <p> {child} </p>
            <p>Signed In</p>
            <button className="signInOut" onClick={handleClick}>
              {buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
}
