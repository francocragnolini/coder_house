import classes from "./CartWidget.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={classes.cart}>
      <AiOutlineShoppingCart />
      <span>{cartCtx.items.length}</span>
    </div>
  );
};

export default CartWidget;
