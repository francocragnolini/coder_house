import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "../components/CartList";
import { Link, useHistory } from "react-router-dom";
import Fallback from "../shared/UI/Fallback";
import classes from "./CartListContainer.module.css";
import Button from "../shared/UI/Button";

const CartListContainer = () => {
  // states
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  // get the total
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
            <div className={classes.cartCtn}>
              <CartList className={classes.cartList} cart={cartCtx.items} />
              <aside className={classes.aside}>
                <div className={classes.cartInfo}>
                  <h2>My Shopping List</h2>
                  <h3> Total Amount: {totalItems}</h3>
                  <h2>Total: {cartCtx.totalAmount}</h2>
                  <div className={classes.actions}>
                    <Button>
                      <Link className={classes.link} to="/">
                        Continue Shopping
                      </Link>
                    </Button>
                    <Button>
                      <Link className={classes.link} to="/checkout">
                        Checkout
                      </Link>
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
