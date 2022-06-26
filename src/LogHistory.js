import "./LogHistory.css";
import React from "react";
import ChildrenExpected from "./ChildrenExpected.js";

export default function LogHistory() {
  return (
    <div className="LogHistory">
      <div className="flex">
        <button className="logHistory">Daily Log</button>
        <button className="logHistory">History</button>
      </div>
      <ChildrenExpected />
    </div>
  );
}
