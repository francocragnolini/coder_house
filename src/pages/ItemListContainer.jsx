import classes from "./ItemListContainer.module.css";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";

// Simulating the item data
const DUMMY_DATA = [
  {
    id: "p1",
    name: "Sneakers",
    description: "Best Sneakers in Town",
    image:
      "https://images.pexels.com/photos/4914807/pexels-photo-4914807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 200,
    initial: 2,
    stock: 5,
  },
  {
    id: "p2",
    name: "Sneakers",
    description: "Nike Air Force",
    image:
      "https://images.pexels.com/photos/7543638/pexels-photo-7543638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 300,
    initial: 2,
    stock: 5,
  },
];

const ItemListContainer = (props) => {
  // simulates fetching an Api
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts((prevState) => {
        const productsList = [...DUMMY_DATA];
        return (prevState = productsList);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [setProducts]);

  return (
    <div className={classes["item-list-container"]}>
      {props.greeting}
      <ItemCount initial={DUMMY_DATA[0].initial} stock={DUMMY_DATA[0].stock} />
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
