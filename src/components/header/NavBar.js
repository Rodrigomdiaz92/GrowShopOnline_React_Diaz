import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";

function NavBar() {
  const { cantidad, cargando } = useContext(contexto);

  return (
    <Container className="navbar" fluid>
      <div className="navbar-presentacion">
        <NavLink to="/">
          <CartWidget />
          {/* <h1>GrowShopOnline</h1> */}
        </NavLink>
      </div>
      <div className="navbar-menu">
        <NavLink to="Quienes-Somos">Quienes Somos</NavLink>
      </div>
      <div className="navbar-categorias">
        <span>Categorias:</span>
        <NavLink to="/categoria/Papelillos">Papelillos</NavLink>
        <NavLink to="/categoria/Filtros">Filtros</NavLink>
        <NavLink to="/categoria/Pipa">Pipas</NavLink>
      </div>
      <div className="carrito">
        {cargando ? (
          " "
        ) : (
          <NavLink to="/carrito">
            <AiOutlineShoppingCart />
            Carrito <span className="red">{cantidad}</span>
          </NavLink>
        )}
      </div>
    </Container>
  );
}

export default NavBar;
