import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { contexto } from "../contexto/CartContext";

const ItemDetail = ({ producto, mensaje }) => {
  const [elegido, setElegido] = useState(false);
  const { addItem } = useContext(contexto);

  const miOnAdd = (cantidadProductos) => {
    if (cantidadProductos !== undefined) {
      setElegido(cantidadProductos);
      addItem(producto, cantidadProductos);
    }
  };
  return (
    <>
      <p>{mensaje}</p>

      <div className="detalle-producto">
        <div className="detalle-producto-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle-producto-info">
          <h2 className="detalle-titulo">
            {producto.categoria} {producto.nombre}
          </h2>
          <p className="detalle-origen"> Origen: {producto.origen}</p>
          <p className="detalle-precio">
            Precio por unidad: $ {producto.precio}
          </p>
          <p className="detalle-fabricante">
            Fabricante: {producto.nombre} {producto.origen}{" "}
          </p>
          <p className="detalle-web">
            {" "}
            <a href={producto.web}>{producto.web}</a>{" "}
          </p>
        </div>
        <div className="detalle-producto-compra">
          <div className="detalle-prodcuto-pickup">
            <h2>Retira tu compra por:</h2>
            <ul>
              <li>local 1</li>
              <li>local 2</li>
              <li>local 3</li>
            </ul>
          </div>

          <div className="detalle-producto-contador">
            {elegido ? null : (
              <ItemCount onAdd={miOnAdd} stock={producto.stock} inicio={1} />
            )}
            {elegido ? (
              <Link className="contador-boton-agregar" to="/carrito">
                Terminar mi compra
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
