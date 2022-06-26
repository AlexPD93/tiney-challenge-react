import "./ChildrenSign.css";
import React from "react";

export default function ChildrenSign({ children }) {
  function handleClick(e) {
    if (e.target.innerText === "Sign In") {
      e.target.innerText = "Sign Out";
      e.target.style.background = "#feffff";
    } else {
      e.target.innerText = "Sign In";
      e.target.style.background = "#f0677a";
    }
  }

  return (
    <div className="ChildrenSign">
      {children.map((child) => {
        return (
          <div className="childContainer" key={child}>
            <img src="/" alt="/"></img>
            <p> {child} </p>
            <p>Signed In</p>
            <button className={"signInOut"} onClick={handleClick}>
              Sign In
            </button>
          </div>
        );
      })}
    </div>
  );
}
