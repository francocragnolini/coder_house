import classes from "./ItemListContainer.module.css";
import ItemCount from "../components/ItemCount";

// Simulating the item data
const DUMMY_DATA = [{ initial: 2, stock: 5 }];

const ItemListContainer = (props) => {
  return (
    <div className={classes["item-list-container"]}>
      {props.greeting}
      <ItemCount initial={DUMMY_DATA[0].initial} stock={DUMMY_DATA[0].stock} />
    </div>
  );
};

export default ItemListContainer;
