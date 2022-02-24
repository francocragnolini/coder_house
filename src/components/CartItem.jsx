import React, { useContext } from "react";
import Button from "../shared/UI/Button";
import { CartContext } from "../context/CartContext";
import Card from "../shared/UI/Card";
import "./CartItem.css";

const CartItem = (props) => {
  const { clear } = useContext(CartContext);
  const { title, description, amount, price, image, id } = props.item;
  // deletes an item in the cart-list
  const deleteItemHandler = () => {
    clear(id);
  };
  return (
    <li className="item">
      <Card className="item__content">
        <div className="item__image">
          <img src={image} alt={title} />
        </div>
        <div className="item__info">
          <h2>{title}</h2>
          <h3>Price: {price}</h3>
          <p> Amount:{amount}</p>
          <Button className="button" onClick={deleteItemHandler}>
            Delete Item
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default CartItem;
