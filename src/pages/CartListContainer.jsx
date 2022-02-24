import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "../components/CartList";
import { useHistory } from "react-router-dom";
import Fallback from "../shared/UI/Fallback";
import classes from "./CartListContainer.module.css";
import Button from "../shared/UI/Button";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const CartListContainer = () => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  // get
  const totalItems = cartCtx.items
    .map((item) => item.amount)
    .reduce((prevItem, item) => prevItem + item, 0);

  //handlers

  // submits the order to the database
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

  // redirect to main page
  const redirectHandler = () => {
    history.push("/");
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
            <div className={classes.cartCtn}>
              <CartList className={classes.cartList} cart={cartCtx.items} />
              <aside>
                <div className={classes.cartInfo}>
                  <h2>My Shopping List</h2>
                  <h3> Total Amount: {totalItems}</h3>
                  <h2>Total: {cartCtx.totalAmount}</h2>
                  <div className={classes.actions}>
                    <Button onClick={redirectHandler}>Continue Shopping</Button>
                    <Button onClick={checkoutHandler}>Checkout</Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartListContainer;
