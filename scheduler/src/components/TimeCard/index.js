import React from "react";
import data from "../../data/schedule_response.json";
import moment from "moment";
import "./styles.css";

export default function TimeCard() {
  return (
    <div>
      {data.map((item) => {
        console.log(item);
        return (
          <h1>
            {item.times.map((sub) => (
              <button className="time-button">
                {moment(sub.time, "HH:mm:ss").format("h:mm A")}
              </button>
            ))}
          </h1>
        );
      })}
    </div>
  );
}
