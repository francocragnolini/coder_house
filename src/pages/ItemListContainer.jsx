import classes from "./ItemListContainer.module.css";
import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = (props) => {
  // simulates fetching an Api
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const query = collection(db, "items");
      const snapshot = await getDocs(query);
      const listItems = [];
      snapshot.forEach((doc) => {
        const object = { id: doc.id, ...doc.data() };
        return listItems.push(object);
      });
      setProducts(listItems);
    };
    getProducts();
  }, []);

  return (
    <div className={classes["item-list-container"]}>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
