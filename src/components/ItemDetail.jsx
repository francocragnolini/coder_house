import { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemCount from "./ItemCount";
import Card from "../shared/UI/Card";
import Button from "../shared/UI/Button";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const [quantity, setQuantity] = useState();
  const history = useHistory();

  // cart context
  // handler takes the count state in itemCount component and save the value to quantity state
  // not working correctly
  const getQuantityHandler = (q) => {
    setQuantity(q);
  };

  //WORKING WITH CONTEXT
  //pushes the item data  to cartCtx.items(array)
  const addToCartHandler = (e) => {
    e.preventDefault();
    props.onAdd({
      id: props.id,
      title: props.title,
      image: props.image,
      description: props.description,
      price: props.price,
      // set the amount to the quantity state(quantity should have the same value as Count)
      // not working
      amount: quantity,
    });
    history.replace("/cart");
  };

  return (
    <Card className={classes.itemDetail}>
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
          onGetAmount={getQuantityHandler}
        />

        <Button
          type="button"
          className={classes.button}
          onClick={addToCartHandler}
        >
          Agregar al Carrito
        </Button>
      </div>
    </Card>
  );
};

export default ItemDetail;
