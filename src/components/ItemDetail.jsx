import ItemCount from "./ItemCount";
import Card from "../shared/UI/Card";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  return (
    <Card className={classes.itemDetail}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.info}>
        <h2>{props.title}</h2>
        <div>{props.description}</div>
        <h3>${props.price}</h3>

        <ItemCount
          initial={props.initial}
          stock={props.stock}
          id={props.id}
          title={props.title}
          image={props.image}
          description={props.description}
          price={props.price}
        />
      </div>
    </Card>
  );
};

export default ItemDetail;
