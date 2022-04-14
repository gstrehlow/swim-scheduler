import React, { useState } from "react";
import data from "./data/schedule_response.json";
import "./App.css";

import TimeOfDaySchedule from "./components/TimeOfDaySchedule";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import TimeCard from "./components/TimeCard";

function App() {
  const [cart, setCart] = useState([]);

  const onTimeCardClick = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (timeToRemove) => {
    setCart(cart.filter((time) => time !== timeToRemove));
  };

  console.log(cart);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="cart" onClick={() => setIsOpen(true)}>
        Cart
        <img
          src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/30/000000/external-shopping-cart-supermarket-photo3ideastudio-lineal-color-photo3ideastudio.png"
          alt="shopping-cart"
        />
        ({cart.length})
      </button>
      <CartModal open={isOpen} onClose={() => setIsOpen(false)}>
        {cart.map((obj) => {
          return (
            <div className="cart-details">
              <h3>{obj.day}</h3>
              <TimeCard time={obj.time} onClick={() => removeFromCart(obj)} />
            </div>
          );
        })}
      </CartModal>
      <Header />
      <TimeOfDaySchedule data={data} onTimeCardClick={onTimeCardClick} />
    </div>
  );
}

export default App;
