import React from "react";

import TimeCard from "./components/TimeCard";
import TimeOfDaySchedule from "./components/TimeOfDaySchedule";
import WeekSchedule from "./components/WeekSchedule";
import Cart from "./components/Cart";
import Day from "./components/Day";
import Students from "./components/Students";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header /> <Day /> <TimeCard />
    </div>
  );
}

export default App;
