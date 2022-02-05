import classes from "./CartWidget.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.length;
  const totalItems = cartCtx.items
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={classes.cart}>
      {numberOfItems > 0 && (
        <>
          <AiOutlineShoppingCart />
          <span>{totalItems}</span>
        </>
      )}
    </div>
  );
};

export default CartWidget;
