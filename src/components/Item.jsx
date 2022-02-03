import { Link } from "react-router-dom";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.info}>
        <Link to={`/item/${props.id}`}>
          <button type="button">Ver detalle del Producto</button>
        </Link>
        <p>stock disponible: {props.stock}</p>
      </div>
    </div>
  );
};

export default Item;
