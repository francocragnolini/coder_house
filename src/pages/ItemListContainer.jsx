import classes from "./ItemListContainer.module.css";
import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = (props) => {
  // simulates fetching an Api
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const param = useParams().id;
  const pathName = useHistory().location.pathname;

  // fetching all Products
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

  // fetching filtered Products by category
  useEffect(() => {
    const getFilteredProducts = async () => {
      const q = query(
        collection(db, "items"),
        where("categoryId", "==", `${param}`)
      );
      const snapshot = await getDocs(q);
      const listItems = [];
      snapshot.forEach((doc) => {
        const object = { id: doc.id, ...doc.data() };
        return listItems.push(object);
      });
      setFilteredProducts(listItems);
    };
    getFilteredProducts();
  }, [param]);

  return (
    <div className={classes["item-list-container"]}>
      {pathName === "/" ? (
        <ItemList items={products} />
      ) : (
        <ItemList items={filteredProducts} />
      )}
    </div>
  );
};

export default ItemListContainer;
