import React from "react";
import TimeCard from "../TimeCard";
import "./styles.css";
import moment from "moment";

export default function Day({ day, onClick }) {
  console.log(day);
  return (
    <div className="day">
      <h1>{moment(day.date).format("ddd MM/DD")}</h1>
      {day.times.map((item) => {
        return <TimeCard time={item.time} onClick={onClick} />;
      })}
    </div>
  );
}
