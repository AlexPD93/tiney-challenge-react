import "./ChildrenExpected.css";

export default function ChildrenExpected() {
  function expectedChildren(children) {
    console.log(children);
    return `You have ${children} children expected today `;
  }

  return (
    <div className="ChildrenExpected">
      <div className="expectedChildren">{expectedChildren(7)}</div>
    </div>
  );
}
