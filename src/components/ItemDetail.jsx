import { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemCount from "./ItemCount";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const [isShown, setIsShown] = useState(true);
  const [quantity, setQuantity] = useState();
  const history = useHistory();

  // handler takes the count state in itemCount component and save the value to quantity state
  const addQuantityHandler = (q) => {
    setQuantity(q);
  };

  //
  const addToCartHandler = (e) => {
    e.preventDefault();
    history.replace("/cart");
  };

  return (
    <div className={classes.itemDetail}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.info}>
        <h2>{props.title}</h2>
        <div>{props.description}</div>
        <h3>${props.price}</h3>

        <ItemCount
          initial={props.initial}
          stock={props.stock}
          onAdd={addQuantityHandler}
        />

        <button
          type="button"
          className={classes.button}
          onClick={addToCartHandler}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
