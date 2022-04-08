import React from "react";
import TimeCard from "../TimeCard";
import "./styles.css";
import moment from "moment";
import data from "../../data/schedule_response.json";

export default function Day() {
  return (
    <div className="day">
      {data.map((item) => {
        return <h1>{moment(item.date).format("ddd MM/DD")}</h1>;
      })}
    </div>
  );
}
