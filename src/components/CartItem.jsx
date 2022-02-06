import React from "react";
import Button from "../shared/UI/Button";
import Card from "../shared/UI/Card";
import "./CartItem.css";

const CartItem = (props) => {
  const { title, description, amount, price, image } = props.item;
  console.log(amount);
  return (
    <li className="item">
      <Card className="item__content">
        <div className="item__image">
          <img src={image} alt={title} />
        </div>
        <div className="item__info">
          <h2>{title}</h2>
          <h3>Price: {price}</h3>
          <p>Description: {description}</p>
          <p> Amount:{amount}</p>
          <Button>Delete Item</Button>
        </div>
      </Card>
    </li>
  );
};

export default CartItem;
