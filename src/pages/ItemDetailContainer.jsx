import { useEffect, useState, useContext } from "react";
import ItemDetail from "../components/ItemDetail";
import classes from "./ItemDetailContainer.module.css";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const ItemDetailContainer = () => {
  const paramId = useParams().id;

  const cartCtx = useContext(CartContext);

  // the item object
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const docRef = doc(db, "items", paramId);
      const docSnapshot = await getDoc(docRef);
      console.log(docSnapshot.data());
      setItemDetail(docSnapshot.data());
    };
    fetchSingleProduct();
  }, []);

  return (
    <div className={classes.container}>
      {/* checking if it is an object and if is not empty */}
      {Object.keys(itemDetail).length !== 0 &&
        Object.getPrototypeOf(itemDetail) === Object.prototype && (
          <ItemDetail
            id={paramId}
            description={itemDetail.description}
            price={itemDetail.price}
            title={itemDetail.name}
            image={itemDetail.image}
            initial={itemDetail.initial}
            stock={itemDetail.stock}
            // passing the global function to bind the add-to-cart button
            onAdd={cartCtx.addItem}
          />
        )}
    </div>
  );
};

export default ItemDetailContainer;
