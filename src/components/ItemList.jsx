import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
          stock={props.stock}
          initial={props.initial}
        />
      ))}
    </ul>
  );
};

export default ItemList;
