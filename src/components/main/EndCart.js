import { Container } from "react-bootstrap";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import { NavLink } from "react-router-dom";

const EndCart = () => {
  const { pedido } = useContext(contexto);
  return (
    <Container>
      <div className="presentacion">
        <div className="presentacion-imagen">
          <img src="/img/tilde.png" alt="confirmacion" />
        </div>
        <div className="presentacion-texto">
          <h2>Muchas Gracias por su compra</h2>
          <p>Conserve su condigo de pedido: {pedido}</p>
          <NavLink className="contador-boton-agregar" to="/">
            Volver a Tienda
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default EndCart;
