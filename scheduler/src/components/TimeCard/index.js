import React from "react";
import moment from "moment";
import "./styles.css";

export default function TimeCard({ time, onClick, day }) {
  return (
    <div className="timeWidth">
      <button
        className="time-button"
        onClickCapture={() => onClick({ day: day, time: time })}
      >
        {moment(time, "HH:mm:ss").format("h:mm A")}
      </button>
    </div>
  );
}
