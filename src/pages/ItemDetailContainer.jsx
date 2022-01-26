import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import classes from "./ItemDetailContainer.module.css";

const DUMMY_ITEM = {
  id: "p1",
  name: "Sneakers",
  description: "Best Sneakers in Town",
  image:
    "https://images.pexels.com/photos/4914807/pexels-photo-4914807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  price: 200,
  initial: 2,
  stock: 5,
};

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    const getItem = setTimeout(() => {
      setItemDetail(DUMMY_ITEM);
      console.log("loading....");
    }, 2000);

    return () => clearTimeout(getItem);
  }, []);

  return (
    <div className={classes.container}>
      {Object.keys(itemDetail).length !== 0 &&
        Object.getPrototypeOf(itemDetail) === Object.prototype && (
          <ItemDetail
            description={DUMMY_ITEM.description}
            price={DUMMY_ITEM.price}
            title={DUMMY_ITEM.name}
            image={DUMMY_ITEM.image}
          />
        )}
    </div>
  );
};

export default ItemDetailContainer;
