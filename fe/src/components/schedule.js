import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const Schedule = () => {
  const [data, setDate] = useState(undefined);

  const fakeData = [
    {
      event: "start",
      time: "03:04:05",
      activity: "exercise",
      rating: 8
    },
    {
      event: "end",
      time: "03:40:05",
      activity: "exercise",
      rating: 8
    }
  ];

  useEffect(() => {
    //fetch data from GraphQL server for activites that have occured today
    // if data is not updated, no need to rerender

    d3.select(".timeSheet")
      .selectAll("div")
      .data(fakeData)
      .enter()
      .append("div")
      .style("width", value => value.rating * 40 + "px")
      .style("background-color", "white")
      .text(value => `${value.event} ${value.activity}`);
  });

  return (
    <div className="schedule">
      <h2>Schedule for this day</h2>
      <div className="timeSheet"> </div>
      <style jsx>{`
        .schedule {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: top;
          background-color: grey;
          height: 80%;
          width: 80%;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Schedule;
