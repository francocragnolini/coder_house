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
          <h3>{price}</h3>
          <p>{description}</p>
          <p>{amount}</p>
        </div>
        <div className="item__actions">
          <Button>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default CartItem;
