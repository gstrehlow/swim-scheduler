import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

export default function CartModal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="cartModal">
        <button className="close-btn" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
