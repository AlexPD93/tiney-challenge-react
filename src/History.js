import "./History.css";

export default function History(props) {
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.toDateString().slice(4, 7);
  const date = fullDate.toDateString().slice(8, 11);

  function handleClick(e) {
    console.log(e);
  }

  if (props.dailyLog) {
    return null;
  } else {
    return (
      <div className="History">
        <div className="year">{year}</div>
        <div className="month">{month} </div>
        <div className="dateMonth">
          {date}
          {month}
          <span>
            {" "}
            <button onClick={handleClick}>Drop</button>{" "}
          </span>
        </div>
        <div className="dateMonth">
          {date - 1}
          {` ${month}`}
          <span>
            {" "}
            <button onClick={handleClick}>Drop</button>{" "}
          </span>
        </div>
        <div className="dateMonth">
          {date - 2}
          {` ${month}`}
          <span>
            {" "}
            <button onClick={handleClick}>Drop</button>{" "}
          </span>
        </div>
        <div className="dateMonth">
          {date - 3}
          {` ${month}`}
          <span>
            {" "}
            <button onClick={handleClick}>Drop</button>{" "}
          </span>
        </div>
        <div className="dateMonth">
          {date - 4}
          {` ${month}`}
          <span>
            {" "}
            <button onClick={handleClick}>Drop</button>{" "}
          </span>
        </div>
      </div>
    );
  }
}
