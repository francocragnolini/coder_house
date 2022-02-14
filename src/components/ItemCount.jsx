import { useState, useContext } from "react";
import classes from "./ItemCount.module.css";
import Button from "../shared/UI/Button";

const ItemCount = (props) => {
  // Setting the state of ItemCount
  const [count, setCount] = useState(props.initial);

  // Handlers
  const countHandler = (operator) => {
    if (operator === "left" && count > props.initial) {
      setCount((prevValue) => prevValue - 1);
    }
    if (operator === "right" && count < props.stock) {
      setCount((prevValue) => prevValue + 1);
    }
  };

  return (
    <div className={classes.itemCount}>
      <Button
        type="button"
        className={classes.btn}
        onClick={() => countHandler("left")}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        className={classes.btn}
        type="button"
        onClick={() => countHandler("right")}
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
