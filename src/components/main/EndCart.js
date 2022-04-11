import { Container } from "react-bootstrap";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import { NavLink } from "react-router-dom";
import { ImLocation } from "react-icons/im";

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

          <hr />
          <h4>
            Conserve su condigo de pedido: <span id="pedido">{pedido}</span>
          </h4>
          <br />
          <hr />
          <p>Podes retirar tu compra por:</p>
          <p>
            <ImLocation /> Av. Maipú 1755, Vicente López, Provincia de Buenos
            Aires
          </p>
          <p>Horario de atención: 10hs a 20hs</p>
          <br />

          <NavLink className="contador-boton-agregar" to="/">
            Volver a Tienda
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default EndCart;
