import "./History.css";
import React, { useState } from "react";

export default function History(props) {
  const [buttonOne, setButtonOne] = useState(false);
  const [buttonTwo, setButtonTwo] = useState(false);
  const [buttonThree, setButtonThree] = useState(false);
  const [buttonFour, setButtonFour] = useState(false);
  const [buttonFive, setButtonFive] = useState(false);

  function handleMon(e) {
    console.log(e);
    if (e.target.innerText === "Show") {
      e.target.innerText = "Hide";
      setButtonOne(true);
    } else {
      e.target.innerText = "Show";
      setButtonOne(false);
    }
  }

  function handleTue(e) {
    if (e.target.innerText === "Show") {
      e.target.innerText = "Hide";
      setButtonTwo(true);
    } else {
      e.target.innerText = "Show";
      setButtonTwo(false);
    }
  }

  function handleWed(e) {
    if (e.target.innerText === "Show") {
      e.target.innerText = "Hide";
      setButtonThree(true);
    } else {
      e.target.innerText = "Show";
      setButtonThree(false);
    }
  }

  function handleThu(e) {
    if (e.target.innerText === "Show") {
      e.target.innerText = "Hide";
      setButtonFour(true);
    } else {
      e.target.innerText = "Show";
      setButtonFour(false);
    }
  }

  function handleFri(e) {
    if (e.target.innerText === "Show") {
      e.target.innerText = "Hide";
      setButtonFive(true);
    } else {
      e.target.innerText = "Show";
      setButtonFive(false);
    }
  }

  function createList() {
    //Could add random numbers into times
    const list = React.createElement("ul", {}, [
      React.createElement("li", { key: "mittens" }, "Mittens:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:00. Out at 16:45"
      ),
      React.createElement("li", { key: "bao" }, "Bao:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:11. Out at 16:41"
      ),
      React.createElement("li", { key: "amber" }, "Amber:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:13. Out at 16:42"
      ),
      React.createElement("li", { key: "tash" }, "Tash:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:11. Out at 16:42"
      ),
      React.createElement("li", { key: "kasia" }, "Kasia:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:14. Out at 16:40"
      ),
      React.createElement("li", { key: "luna" }, "Luna:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:11. Out at 16:41"
      ),
      React.createElement("li", { key: "spike" }, "Spike:"),
      React.createElement(
        "p",
        { className: "signedInOut" },
        "In at 10:15. Out at 16:40"
      ),
    ]);
    return list;
  }

  if (props.dailyLog) {
    return null;
  } else {
    return (
      <div className="History">
        <div>
          Mon{" "}
          <span>
            <button onClick={handleMon}>Show</button>
          </span>
          <div>{buttonOne ? createList() : null}</div>
        </div>
        <div>
          Tue{" "}
          <span>
            <button onClick={handleTue}>Show</button>
          </span>
          <div>{buttonTwo ? createList() : null}</div>
        </div>
        <div>
          Wed{" "}
          <span>
            <button onClick={handleWed}>Show</button>
          </span>
          <div>{buttonThree ? createList() : null}</div>
        </div>
        <div>
          Thu{" "}
          <span>
            <button onClick={handleThu}>Show</button>
          </span>
          <div>{buttonFour ? createList() : null}</div>
        </div>
        <div>
          Fri{" "}
          <span>
            <button onClick={handleFri}>Show</button>
          </span>
          <div>{buttonFive ? createList() : null}</div>
        </div>
      </div>
    );
  }
}
