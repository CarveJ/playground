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
      .style("width", value => value.rating * 2 + "px")
      .text(value => value.event + value.activity);

    d3.select(".timeSheet")
      .selectAll("span")
      .data(fakeData)
      .enter()
      .append("span")
      .style("width", `80px`)
      .style("height", `30px`)
      .style("background-color", "grey")
      .text(value => value.time);
  });

  return (
    <div>
      <h2>Schedule for this day</h2>
      <div className="timeSheet"> </div>
    </div>
  );
};

export default Schedule;
