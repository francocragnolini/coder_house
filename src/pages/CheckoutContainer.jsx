import Form from "../components/Form";
import { CartContext } from "../context/CartContext";
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
import classes from "./CheckoutContainer.module.css";
import { useContext, useState } from "react";

const CheckoutContainer = () => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const checkoutHandler = async (user) => {
    // checking the cart is not empty
    if (cartCtx.length === 0) {
      console.log("no items in the cart were found");
      return;
    }

    // transforming the item data
    const products = cartCtx.items.map((item) => {
      const updatedItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.amount,
      };
      return updatedItem;
    });

    const newOrder = {
      buyer: user,
      items: products,
      total: cartCtx.totalAmount,
    };

    // add the order to db
    addDoc(collection(db, "orders"), newOrder)
      .then((doc) => {
        console.log(doc);
        setOrderId(doc.id);
      })
      .catch((err) => console.log(err));

    const batch = writeBatch(db);

    // getting items from db (matches the cart items)
    const itemsToUpdate = query(
      collection(db, "items"),
      where(
        documentId(),
        "in",
        cartCtx.items.map((item) => item.id)
      )
    );
    // updating the stock
    const snapshot = await getDocs(itemsToUpdate);
    snapshot.docs.forEach((docSnapshot, idx) => {
      batch.update(docSnapshot.ref, {
        stock: docSnapshot.data().stock - products[idx].quantity,
      });
    });
    batch
      .commit()
      .then(() => {
        console.log("Well Done Items Updated");
        cartCtx.clearCart();
        setShowOrder(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      {!showOrder && (
        <>
          <h2>Checkout</h2>
          <p>Please Complete the Form to generate Your Order</p>
          <Form onCheckout={checkoutHandler} />
        </>
      )}
      {showOrder && (
        <div className={classes.order}>
          <h2>Your Order Has Been Created</h2>
          <h3>Your Order: {orderId}</h3>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;
