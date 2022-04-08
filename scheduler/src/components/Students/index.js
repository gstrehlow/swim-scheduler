import React from "react";
import requestData from "../../data/schedule_request.json";

export default function Students() {
  return (
    <div>
      {requestData.map((response) => {
        console.log(response);
        return <h1>Hello</h1>;
      })}
    </div>
  );
}
