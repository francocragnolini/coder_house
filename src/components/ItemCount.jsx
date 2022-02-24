import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useHistory } from "react-router-dom";

import classes from "./ItemCount.module.css";
import Button from "../shared/UI/Button";

const ItemCount = (props) => {
  // Setting the state of ItemCount
  const [count, setCount] = useState(1);

  const history = useHistory();

  const cartCtx = useContext(CartContext);

  // Handlers
  const incrementHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const decrementHandler = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const addToCartHandler = (e) => {
    e.preventDefault();

    cartCtx.addItem({
      id: props.id,
      title: props.title,
      image: props.image,
      description: props.description,
      price: props.price,
      amount: count,
    });
    history.replace("/cart");
  };

  return (
    <div>
      <div className={classes.itemCount}>
        <Button type="button" onClick={incrementHandler}>
          -
        </Button>
        <span>{count}</span>
        <Button type="button" onClick={decrementHandler}>
          +
        </Button>
      </div>
      <Button onClick={addToCartHandler} type="button">
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemCount;
