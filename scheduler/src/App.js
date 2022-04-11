import React, { useState } from "react";
import data from "./data/schedule_response.json";
import "./App.css";

import TimeOfDaySchedule from "./components/TimeOfDaySchedule";
import Header from "./components/Header";
import CartModal from "./components/CartModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="cart" onClick={() => setIsOpen(true)}>
        Cart
        <img
          src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/30/000000/external-shopping-cart-supermarket-photo3ideastudio-lineal-color-photo3ideastudio.png"
          alt="shopping-cart"
        />
      </button>
      <CartModal open={isOpen} onClose={() => setIsOpen(false)}>
        <button className="time-button timeWidth">4:00 PM</button>
        <button className="time-button timeWidth">10:30 AM</button>
      </CartModal>
      <Header />
      <TimeOfDaySchedule data={data} />
    </div>
  );
}

export default App;
