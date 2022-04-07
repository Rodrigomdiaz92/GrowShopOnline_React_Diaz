import { Container, Form } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";

const CartDetail = () => {
  const { clear, carrito, removeItem, total } = useContext(contexto);
  /*  console.log(carrito); */

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const terminarCompra = () => {
    const orden = {
      buyer: {
        nombre: nombre,
        telefono: telefono,
        email: email,
      },
      items: carrito,
      date: serverTimestamp(),
      total: total,
    };
    /*  const pedidoCollection = collection(db, "ordenes");
    const pedido = addDoc(pedidoCollection, orden); */
    console.log(orden);

    clear();
  };

  const usuarioNombre = (e) => {
    setNombre(e.target.value);
  };
  const usuarioTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const usuarioEmail = (e) => {
    setEmail(e.target.value);
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
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="name"
              placeholder="Nombre y Apellido"
              onChange={usuarioNombre}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Numero de telefono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="11-xxxx-xxxx"
              onChange={usuarioTelefono}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={usuarioEmail}
            />
          </Form.Group>
        </Form>
      </Container>
      {/* <input type="text" name="nombre" onChange={usuarioChange} /> */}
    </>
  );
};

export default CartDetail;
