import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  return (
    <div className={classes.itemDetail}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.info}>
        <h2>{props.title}</h2>
        <div>{props.description}</div>
        <h3>${props.price}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
