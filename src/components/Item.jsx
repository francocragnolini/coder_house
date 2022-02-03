import { Link } from "react-router-dom";
import Button from "../shared/UI/Button";
import Card from "../shared/UI/Card";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={classes.item}>
      <Card className={classes.item__content}>
        <div className={classes.item__image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.item__info}>
          <Link to={`/item/${props.id}`}>
            <Button className type="button">
              Ver detalle del Producto
            </Button>
          </Link>
          <p>stock disponible: {props.stock}</p>
        </div>
      </Card>
    </li>
  );
};

export default Item;
