import React from "react";
import Day from "../Day";

export default function DayTime({ data, addToCart }) {
  return (
    <div>
      {data.map((item) => (
        <Day day={item} onClick={addToCart} />
      ))}
    </div>
  );
}
