import classes from "./CartWidget.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <div className={classes.cart}>
      <AiOutlineShoppingCart />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
