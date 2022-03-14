import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = (props) => {
  const miOnAdd = () => {};
  return (
    <>
      {props.datos.map((producto, indice) => {
        return (
          <div className="producto">
            <div className="producto-img">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <h2 className="producto-titulo">
              {producto.nombre} {producto.categoria}
            </h2>
            <p className="producto-articulo">Articulo n°{producto.id}</p>
            <Link className="producto-datos" to={`/producto/${producto.id}`}>
              {" "}
              Ver mas..{" "}
            </Link>
            <p className="producto-precio">
              Precio por unidad: $ {producto.precio}
            </p>
            <ItemCount onAdd={miOnAdd} stock={producto.stock} inicio={1} />
          </div>
        );
      })}
    </>
  );
};

export default Item;
