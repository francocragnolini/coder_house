import classes from "./CartWidget.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

const CartWidget = () => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.length;

  return (
    <div className={classes.cart}>
      <AiOutlineShoppingCart />

      <span>{numberOfItems}</span>
    </div>
  );
};

export default CartWidget;
