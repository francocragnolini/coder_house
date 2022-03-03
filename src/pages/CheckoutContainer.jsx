import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Card from "../shared/UI/Card";
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
import classes from "./CheckoutContainer.module.css";
import { useContext, useState } from "react";

const CheckoutContainer = () => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
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

  const mainPageHandler = () => {
    history.push("/");
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
        <Card className={classes.order}>
          <h2>Your Order Has Been Created</h2>
          <h4>Id:{orderId}</h4>
          <p>Thank You For Your Purchase. Your Products Will Arrive Soon</p>
          <Button onClick={mainPageHandler} className={classes.orderBtn}>
            Go to Main Page
          </Button>
        </Card>
      )}
    </div>
  );
};

export default CheckoutContainer;
