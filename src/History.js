import "./History.css";
import React, { useState } from "react";

export default function History(props) {
  const [buttonOne, setButtonOne] = useState(false);
  const [buttonTwo, setButtonTwo] = useState(false);
  const [buttonThree, setButtonThree] = useState(false);
  const [buttonFour, setButtonFour] = useState(false);
  const [buttonFive, setButtonFive] = useState(false);

  function handleMon(e) {
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
        { key: "classMittens", className: "signedInOut" },
        "In at 10:00. Out at 16:45"
      ),
      React.createElement("li", { key: "bao" }, "Bao:"),
      React.createElement(
        "p",
        { key: "classBao", className: "signedInOut" },
        "In at 10:11. Out at 16:41"
      ),
      React.createElement("li", { key: "amber" }, "Amber:"),
      React.createElement(
        "p",
        { key: "classAmber", className: "signedInOut" },
        "In at 10:13. Out at 16:42"
      ),
      React.createElement("li", { key: "tash" }, "Tash:"),
      React.createElement(
        "p",
        { key: "classTash", className: "signedInOut" },
        "In at 10:11. Out at 16:42"
      ),
      React.createElement("li", { key: "kasia" }, "Kasia:"),
      React.createElement(
        "p",
        { key: "classKasia", className: "signedInOut" },
        "In at 10:14. Out at 16:40"
      ),
      React.createElement("li", { key: "luna" }, "Luna:"),
      React.createElement(
        "p",
        { key: "classLuna", className: "signedInOut" },
        "In at 10:11. Out at 16:41"
      ),
      React.createElement("li", { key: "spike" }, "Spike:"),
      React.createElement(
        "p",
        { key: "classSpike", className: "signedInOut" },
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
        <div className="daysShow">
          Mon
          <button className="showHide" onClick={handleMon}>
            Show
          </button>
          <div>{buttonOne ? createList() : null}</div>
        </div>
        <div className="daysShow">
          Tue{" "}
          <button className="showHide" onClick={handleTue}>
            Show
          </button>
          <div>{buttonTwo ? createList() : null}</div>
        </div>
        <div className="daysShow">
          Wed{" "}
          <button className="showHide" onClick={handleWed}>
            Show
          </button>
          <div>{buttonThree ? createList() : null}</div>
        </div>
        <div className="daysShow">
          Thu{" "}
          <button className="showHide" onClick={handleThu}>
            Show
          </button>
          <div>{buttonFour ? createList() : null}</div>
        </div>
        <div className="daysShow">
          Fri{" "}
          <button className="showHide" onClick={handleFri}>
            Show
          </button>
          <div>{buttonFive ? createList() : null}</div>
        </div>
      </div>
    );
  }
}
