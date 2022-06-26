import "./LogHistory.css";
import React, { useState } from "react";
import ChildrenSign from "./ChildrenSign.js";
import History from "./History.js";

export default function LogHistory() {
  const [dailyLog, setDailyLog] = useState(true);

  return (
    <div className="LogHistory">
      <div className="flex">
        <button className="logHistory" onClick={() => setDailyLog(true)}>
          Daily Log
        </button>
        <button className="logHistory" onClick={() => setDailyLog(false)}>
          History
        </button>
      </div>
      <ChildrenSign dailyLog={dailyLog} />
      <History dailyLog={dailyLog} />
    </div>
  );
}
