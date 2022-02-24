import React from "react";
import CartItem from "../components/CartItem";
import classes from "./CartList.module.css";

const CartList = (props) => {
  return (
    // <ul className={classes.layout}>
    //   {props.cart.map((item) => (
    //     <CartItem key={item.id} item={item} />
    //   ))}
    // </ul>
    <ul className={classes.cartList}>
      {props.cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
