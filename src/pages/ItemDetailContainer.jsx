import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import classes from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const ItemDetailContainer = () => {
  const paramId = useParams().id;

  // the item object
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const docRef = doc(db, "items", paramId);
      const docSnapshot = await getDoc(docRef);
      setItemDetail(docSnapshot.data());
    };
    fetchSingleProduct();
  }, [paramId]);

  return (
    <div className={classes.container}>
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
          />
        )}
    </div>
  );
};

export default ItemDetailContainer;
