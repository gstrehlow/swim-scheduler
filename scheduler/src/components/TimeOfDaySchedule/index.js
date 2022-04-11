import React from "react";
import Day from "../Day";
import "./styles.css";

export default function TimeOfDaySchedule({ data }) {
  const onTimeCardClick = (item) => {
    console.log(item);
  };

  return (
    <div>
      {data.map((item) => (
        <Day day={item} onClick={onTimeCardClick} />
      ))}
    </div>
  );
}
