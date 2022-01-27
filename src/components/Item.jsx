import { Link } from "react-router-dom";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <Link to={`/item/${props.id}`}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.info}>
          <h2>{props.name}</h2>
          <button>Ver detalle del Producto</button>
          <p>stock disponible: {props.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
