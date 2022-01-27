import Item from "./Item";
import classes from "./ItemList.module.css";
const ItemList = (props) => {
  return (
    <ul className={classes.productsList}>
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
          stock={item.stock}
          initial={item.initial}
        />
      ))}
    </ul>
  );
};

export default ItemList;
