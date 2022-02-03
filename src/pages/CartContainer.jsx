import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartContainer = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div style={{ color: "black", marginTop: "200px" }}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartContainer;
