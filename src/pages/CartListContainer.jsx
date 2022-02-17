import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "../components/CartList";
import Fallback from "../shared/UI/Fallback";
import classes from "./CartListContainer.module.css";
import Button from "../shared/UI/Button";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const CartListContainer = () => {
  const cartCtx = useContext(CartContext);

  // get
  const totalItems = cartCtx.items
    .map((item) => item.amount)
    .reduce((prevItem, item) => prevItem + item, 0);

  //handlers
  const checkoutHandler = async (e) => {
    e.preventDefault();

    // checking the cart is not empty
    if (cartCtx.length === 0) {
      console.log("no items in the cart were found");
      return;
    }
    // modeling the data from cart
    const orderItems = cartCtx.items.map((item) => {
      const updatedItem = {
        id: item.id,
        title: item.title,
        price: item.price,
      };
      return updatedItem;
    });

    // modeling the data
    const buyer = {
      name: "franco",
      email: "franco@gmail.com",
      phone: 325158858,
    };

    const order = {
      buyer: buyer,
      items: orderItems,
      total: cartCtx.totalAmount,
    };

    // adding the order to the collection orders fb db
    addDoc(collection(db, "orders"), order)
      .then((doc) => console.log(doc.id))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Fallback in case the Cart list is empty */}
      <div style={{ color: "black", marginTop: "200px" }}>
        {cartCtx.items.length === 0 && (
          <Fallback
            className="center"
            content="No Item Found"
            action="Go Shopping"
          />
        )}
        {cartCtx.items.length > 0 && (
          <div className={classes.cart}>
            <CartList cart={cartCtx.items} />
            <aside>
              <h2>My Shopping List</h2>
              <div> Total Amount: {totalItems}</div>
              <div>Total: {cartCtx.totalAmount}</div>
              <Button>Continue Shopping</Button>
              <Button onClick={checkoutHandler}>Checkout</Button>
            </aside>
          </div>
        )}
      </div>
    </>
  );
};

export default CartListContainer;
