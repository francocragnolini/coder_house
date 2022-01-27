import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = (props) => {
  //   setting the state of ItemCount
  const [count, setCount] = useState(props.initial);

  //  Handlers
  const countHandler = (operator) => {
    if (operator === "-" && count > 1) {
      setCount(count - 1);
    }
    if (operator === "+" && count < props.stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className={classes.itemCount}>
      <button type="button" onClick={() => countHandler("-")}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => countHandler("+")}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
