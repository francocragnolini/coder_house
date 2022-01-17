import classes from "./ItemListContainer.module.css";
const ItemListContainer = (props) => {
  return <div className={classes["item-list-container"]}>{props.greeting}</div>;
};

export default ItemListContainer;
