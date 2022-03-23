import { Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";

export const Carrito = () => {
  const { clear, carrito, removeItem } = useContext(contexto);
  console.log(carrito);

  return (
    <Container>
      <div className="titulo-cart">
        <h2>
          {" "}
          <AiOutlineShoppingCart />
          Mis Pedidos
        </h2>{" "}
        <button onClick={clear} className="contador-boton-borrar">
          Limpiar Carrito
        </button>
      </div>
      {carrito.map((item) => (
        <div className="producto-carrito">
          <p>{item.count}X</p>
          <img
            className="img-carrito"
            src={item.producto.imagen}
            alt={item.producto.nombre}
          />
          <p>
            {item.producto.nombre} {item.producto.categoria}
          </p>
          <p>Precio por unidad: $ {item.producto.precio}</p>
          <button
            onClick={() => {
              removeItem(item.producto);
            }}
            className="contador-boton-borrar"
          >
            {" "}
            X{" "}
          </button>
        </div>
      ))}
    </Container>
  );
};
