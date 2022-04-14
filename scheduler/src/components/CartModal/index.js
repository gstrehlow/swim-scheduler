import React from "react";
import "./styles.css";

export default function CartModal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay" />
      <div className="cartModal">
        <button className="close-btn" onClick={onClose}>
          x
        </button>
        <h2 className="cart-header">My Shopping Cart</h2>
        <p className="cart-title">
          Click on a time to remove it from the cart!
        </p>
        {children}
      </div>
    </>
  );
}
