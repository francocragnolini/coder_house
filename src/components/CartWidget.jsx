import classes from "./CartWidget.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((CurrentNumber, item) => {
    return CurrentNumber + item.amount;
  }, 0);
  return (
    <div className={classes.cart}>
      <AiOutlineShoppingCart />
      <span>{numberOfItems}</span>
    </div>
  );
};

export default CartWidget;
