import React, { useState } from "react";

const Record = () => {
  const [state, setState] = useState({ start: false, end: false });

  let lastClick = "end";

  const handleClick = value => {
    lastClick === value
      ? console.log("doubleClicked")
      : setState({ ...state, [value]: Date.now() });

    if (value === "end") {
      //Send Mutation to GraphQL Server
      reset();
    }
  };

  const reset = () => {
    lastClick = "end";
    setState({ start: false, end: false });
  };

  const renderOptions = () => {
    // take in the array of options for a Graphql Query
  };
  return (
    <div className="record">
      <div className="activity">
        <label for="Activity Select">Pick your activity</label>
        <select>
          <option value=""> Please choose an option</option>
          {renderOptions()}
        </select>
      </div>

      <div className="startStop">
        <button onClick={() => handleClick("start")}>Start</button>
        <button onClick={() => handleClick("stop")}>Stop</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
      <style jsx>{`
        .record {
          display: flex;
          background-color: #f2f2f2;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 80%;
          width: 80%;
          margin-top: 20px;
        }

        .record > div {
          margin: 20px;
        }
      `}</style>
    </div>
  );
};

export default Record;
