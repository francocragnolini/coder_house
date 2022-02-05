import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = (props) => {
  //   setting the state of ItemCount
  const [count, setCount] = useState(props.initial);
  console.log(count);

  // //  Handlers
  const countHandler = (operator) => {
    if (operator === "left" && count > props.initial) {
      // setCount((prevValue) => prevValue - 1);
      setCount(count - 1);
    }
    if (operator === "right" && count < props.stock) {
      // setCount((prevValue) => prevValue + 1);
      setCount(count + 1);
    }
  };

  return (
    <div className={classes.itemCount}>
      <button
        className={classes.btn}
        type="button"
        onClick={() => countHandler("left")}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className={classes.btn}
        type="button"
        onClick={() => countHandler("right")}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
