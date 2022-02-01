import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = (props) => {
  //   setting the state of ItemCount
  const { onAdd } = props;
  const [count, setCount] = useState(props.initial);

  //  Handlers
  const countHandler = (operator) => {
    if (operator === "-" && count > 1) {
      setCount((prevValue) => prevValue - 1);
    }
    if (operator === "+" && count < props.stock) {
      setCount((prevValue) => prevValue + 1);
    }
    onAdd(count);
  };

  return (
    <div className={classes.itemCount}>
      <button
        className={classes.btn}
        type="button"
        onClick={() => countHandler("-")}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className={classes.btn}
        type="button"
        onClick={() => countHandler("+")}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
