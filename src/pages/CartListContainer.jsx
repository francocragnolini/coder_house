import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "../components/CartList";
import Fallback from "../shared/UI/Fallback";
import classes from "./CartListContainer.module.css";
import Button from "../shared/UI/Button";

const CartListContainer = () => {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items
    .map((item) => item.amount)
    .reduce((prevItem, item) => prevItem + item, 0);
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
              <div> Amount: {totalItems}</div>
              <div>Total a Pagar: {cartCtx.totalAmount}</div>
              <Button>Finalizar Compra</Button>
            </aside>
          </div>
        )}
      </div>
    </>
  );
};

export default CartListContainer;
