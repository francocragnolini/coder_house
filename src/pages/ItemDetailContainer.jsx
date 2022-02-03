import { useEffect, useState, useContext } from "react";
import ItemDetail from "../components/ItemDetail";
import classes from "./ItemDetailContainer.module.css";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";

// this should be an array with the data then a have to filter the item by id from useParams
const DUMMY_ITEM = {
  id: "p1",
  name: "Sneakers",
  description: "Best Sneakers in Town",
  // PROBLEM FOUND IM * 0 so the result is = 0
  amount: 0,
  image:
    "https://images.pexels.com/photos/4914807/pexels-photo-4914807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  price: 200,
  initial: 0,
  stock: 5,
};

const ItemDetailContainer = () => {
  const paramId = useParams().id;

  const cartCtx = useContext(CartContext);

  // the item object
  const [itemDetail, setItemDetail] = useState({});

  // fetching the data
  useEffect(() => {
    const getItem = setTimeout(() => {
      setItemDetail(DUMMY_ITEM);
    }, 2000);

    return () => clearTimeout(getItem);
  }, []);

  return (
    <div className={classes.container}>
      {/* checking if it is an object and if is not empty */}
      {Object.keys(itemDetail).length !== 0 &&
        Object.getPrototypeOf(itemDetail) === Object.prototype && (
          <ItemDetail
            id={paramId}
            description={DUMMY_ITEM.description}
            price={DUMMY_ITEM.price}
            title={DUMMY_ITEM.name}
            image={DUMMY_ITEM.image}
            initial={DUMMY_ITEM.initial}
            stock={DUMMY_ITEM.stock}
            // passing the global function to bind the add-to-cart button
            onAdd={cartCtx.addItem}
          />
        )}
    </div>
  );
};

export default ItemDetailContainer;
