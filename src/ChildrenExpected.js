import "./ChildrenExpected.css";
import React from "react";
import ChildrenSign from "./ChildrenSign.js";

export default function ChildrenExpected() {
  const children = [
    "Mittens",
    "Bao",
    "Amber",
    "Tash",
    "Kasia",
    "Luna",
    "Spike",
  ];

  function expectedChildren(children) {
    return `You have ${children.length} cats expected today `;
  }

  return (
    <div className="ChildrenExpected">
      <div className="expectedChildren">{expectedChildren(children)}</div>
      <ChildrenSign children={children} />
    </div>
  );
}
