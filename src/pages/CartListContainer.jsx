import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "../components/CartList";
import { Link, useHistory } from "react-router-dom";
import Fallback from "../shared/UI/Fallback";
import classes from "./CartListContainer.module.css";
import Button from "../shared/UI/Button";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

const CartListContainer = () => {
  // states
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  // get the total
  const totalItems = cartCtx.items
    .map((item) => item.amount)
    .reduce((prevItem, item) => prevItem + item, 0);

  //handlers

  // const checkoutHandler = async (e) => {
  //   e.preventDefault();

  //   // checking the cart is not empty
  //   if (cartCtx.length === 0) {
  //     console.log("no items in the cart were found");
  //     return;
  //   }

  //   // transforming the item data
  //   const products = cartCtx.items.map((item) => {
  //     const updatedItem = {
  //       id: item.id,
  //       title: item.title,
  //       price: item.price,
  //       quantity: item.amount,
  //     };
  //     return updatedItem;
  //   });

  //   // modeling the data
  //   const buyer = {
  //     name: "franco",
  //     email: "franco@gmail.com",
  //     phone: 325158858,
  //   };

  //   const newOrder = {
  //     buyer: buyer,
  //     items: products,
  //     total: cartCtx.totalAmount,
  //   };

  //   // add the order to db
  //   addDoc(collection(db, "orders"), newOrder)
  //     .then((doc) => {
  //       console.log(doc);
  //     })
  //     .catch((err) => console.log(err));

  //   const batch = writeBatch(db);

  //   // getting items from db (matches the cart items)
  //   const itemsToUpdate = query(
  //     collection(db, "items"),
  //     where(
  //       documentId(),
  //       "in",
  //       cartCtx.items.map((item) => item.id)
  //     )
  //   );
  //   // updating the stock
  //   const snapshot = await getDocs(itemsToUpdate);
  //   snapshot.docs.forEach((docSnapshot, idx) => {
  //     batch.update(docSnapshot.ref, {
  //       stock: docSnapshot.data().stock - products[idx].quantity,
  //     });
  //   });
  //   batch
  //     .commit()
  //     .then(() => {
  //       console.log("Well Done Items Updated");
  //       cartCtx.clearCart();
  //       history.push(`/order/${orderID}`);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
              <aside className={classes.aside}>
                <div className={classes.cartInfo}>
                  <h2>My Shopping List</h2>
                  <h3> Total Amount: {totalItems}</h3>
                  <h2>Total: {cartCtx.totalAmount}</h2>
                  <div className={classes.actions}>
                    <Button>
                      <Link to="/checkout">Checkout</Link>
                    </Button>
                    <Button>
                      <Link to="/">Continue Shopping</Link>
                    </Button>
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
