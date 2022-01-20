import classes from "./Item.module.css";

const Item = (props) => {
  console.log(props.stock);
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.info}>
        <h2>{props.name}</h2>
        <button>Ver detalle del Producto</button>
        <div>stock disponible: {props.stock}</div>
      </div>
    </div>
  );
};

export default Item;
