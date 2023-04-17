import { CartIcon } from "../icons.js";
import { useSelector } from "react-redux";
import React from "react";

function Navbar() {
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  console.log(
    useSelector((store) => {
      console.log(store);
    })
  );
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
