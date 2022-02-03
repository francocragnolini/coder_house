import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import CartList from "../components/CartList";

const CartListContainer = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div style={{ color: "black", marginTop: "200px" }}>
      {cartCtx.items.length === 0 && (
        <div>
          <p>no Items Found</p>
          <Link to="/">
            <button type="button">Go to Shopping</button>
          </Link>
        </div>
      )}
      {cartCtx.items.length > 0 && <CartList cart={cartCtx.items} />}
    </div>
  );
};

export default CartListContainer;
