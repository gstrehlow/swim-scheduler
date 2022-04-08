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
      <h3 className="morning">Morning (8:00 AM - 12:00 PM)</h3>
      <h3 className="afternoon">Afternoon (12:00 PM - 4:00 PM)</h3>
      <h3 className="evening">Evening (4:00 PM - 9:00 PM)</h3>
    </div>
  );
}
