import "./LogHistory.css";
import ChildrenExpected from "./ChildrenExpected.js";

export default function LogHistory() {
  return (
    <div className="LogHistory">
      <div className="flex">
        <button>Daily Log</button>
        <button>History</button>
      </div>
      <ChildrenExpected />
    </div>
  );
}
