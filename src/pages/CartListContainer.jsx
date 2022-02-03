import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

import CartList from "../components/CartList";
import Fallback from "../shared/UI/Fallback";

const CartListContainer = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div style={{ color: "black", marginTop: "200px" }}>
      {cartCtx.items.length === 0 && (
        <Fallback
          className="center"
          content="No Item Found"
          action="Go Shopping"
        />
      )}
      {cartCtx.items.length > 0 && <CartList cart={cartCtx.items} />}
    </div>
  );
};

export default CartListContainer;
