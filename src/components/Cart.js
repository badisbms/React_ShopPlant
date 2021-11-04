import React from "react";
import "../styles/Cart.css";
import { useState } from "react";

const Cart = ({ cart, updateCart }) => {

  const [OpenCart, setOpenCart] = useState(true);

  return OpenCart ? (
    <div className="lmj-cart">
      <button
        onClick={() => {
          setOpenCart(false);
        }}
      >
        Fermer
      </button>
      <h2>Panier : </h2>
      <ul className="lmj-li">
      {/* {cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))} */}
      </ul>
      <p>Total : {1 * cart}€ </p>

      <button onClick={() => {
        updateCart(0)
      }}>Vider le Panier</button>
    </div>
  ) : (
    <div className="lmj-cart">
      <button
        onClick={() => {
          setOpenCart(true);
        }}
      >
        Ouvrir
      </button>
    </div>
  );
};

export default Cart;
