import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = (props) => {
  //   setting the state of ItemCount
  const [count, setCount] = useState(props.initial);

  //  Handlers
  const operation = (operator) => {
    if (operator === "-" && count > 1) {
      setCount(count - 1);
    }
    if (operator === "+" && count < props.stock) {
      setCount(count + 1);
    }
  };

  const addHandler = () => {
    alert("Hello World");
  };
  return (
    <div className={classes.itemCount}>
      <button type="button" onClick={() => operation("-")}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => operation("+")}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
