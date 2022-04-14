import React, { useState } from "react";
import data from "./data/schedule_response.json";
import "./App.css";

import DayTime from "./components/DayTime";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import TimeCard from "./components/TimeCard";

function App() {
  const [cart, setCart] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (timeToRemove) => {
    setCart(cart.filter((time) => time !== timeToRemove));
  };

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
      <DayTime data={data} addToCart={addToCart} />
    </div>
  );
}

export default App;
