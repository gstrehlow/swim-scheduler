import React from "react";
import moment from "moment";
import "./styles.css";

export default function TimeCard({ time, onClick }) {
  return (
    <div className="timeWidth">
      <button className="time-button" onClickCapture={() => onClick(time)}>
        {moment(time, "HH:mm:ss").format("h:mm A")}
      </button>
    </div>
  );
}
