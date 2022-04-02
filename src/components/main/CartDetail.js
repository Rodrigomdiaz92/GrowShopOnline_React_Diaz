import { Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";

const CartDetail = () => {
  const { clear, carrito, removeItem, total } = useContext(contexto);
  console.log(carrito);

  const terminarCompra = () => {
    const orden = {
      buyer: {
        nombre: "Rodrigo",
        telefono: "1161521487",
        email: "rodrigodiaz@gmail.com",
      },
      items: carrito,
      date: serverTimestamp(),
      total: total,
    };
    const pedidoCollection = collection(db, "ordenes");
    const pedido = addDoc(pedidoCollection, orden);
    clear();
  };

  return (
    <>
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
                removeItem(item.producto, item.count);
              }}
              className="contador-boton-borrar"
            >
              {" "}
              X{" "}
            </button>
          </div>
        ))}
      </Container>
      <Container>
        {" "}
        <h2>Total a Pagar: $ {total}</h2>{" "}
        <button className="contador-boton-agregar" onClick={terminarCompra}>
          Confirmar Compra
        </button>
      </Container>
    </>
  );
};

export default CartDetail;
