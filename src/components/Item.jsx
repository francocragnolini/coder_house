import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <button>Ver detalle del Producto</button>
        <div>stock disponible: {props.stock}</div>
      </div>
    </div>
  );
};

export default Item;
