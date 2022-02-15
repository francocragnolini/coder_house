import { useState, useContext } from "react";
import classes from "./ItemCount.module.css";
import Button from "../shared/UI/Button";
import { increment } from "firebase/firestore";

const ItemCount = (props) => {
  // Setting the state of ItemCount
  const [count, setCount] = useState(0);

  // Handlers
  // const countHandler = (operator) => {
  //   if (operator === "left" && count > 0) {
  //     setCount((prevValue) => prevValue - 1);
  //     props.onGetAmount(count);
  //   }
  //   if (operator === "right" && count < props.stock) {
  //     setCount((prevValue) => prevValue + 1);
  //     props.onGetAmount(count);
  //   }
  //   // props.onGetAmount(count);
  //   console.log(count);
  // };

  // Handlers
  const incrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      props.onGetAmount(count);
    }
  };
  const decrementHandler = () => {
    if (count < props.stock) {
      setCount(count + 1);
      props.onGetAmount(count);
    }
  };

  return (
    <div className={classes.itemCount}>
      <Button
        type="button"
        className={classes.btn}
        // onClick={() => countHandler("left")}
        onClick={incrementHandler}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        className={classes.btn}
        type="button"
        // onClick={() => countHandler("right")}
        onClick={decrementHandler}
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
