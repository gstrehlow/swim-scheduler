import React from "react";
import data from "./data/schedule_response.json";

import TimeOfDaySchedule from "./components/TimeOfDaySchedule";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <TimeOfDaySchedule data={data} />
    </div>
  );
}

export default App;
