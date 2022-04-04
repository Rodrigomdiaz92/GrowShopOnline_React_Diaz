import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";

function NavBar() {
  const { cantidad, cargando } = useContext(contexto);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/">
          <CartWidget />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Quienes Somos</Nav.Link>

            <NavDropdown
              variant="dark"
              title="Categorias"
              id="collasible-nav-dropdown"
            >
              <NavLink to="/categoria/Papelillos">Papelillos</NavLink>
              <NavLink to="/categoria/Filtros">Filtros</NavLink>
              <NavLink to="/categoria/Pipa">Pipas</NavLink>
              <NavDropdown.Divider />
              <NavLink to="/">Todos los productos</NavLink>
            </NavDropdown>
          </Nav>
          <Nav>
            {cargando ? (
              " "
            ) : (
              <NavLink id="cart-icon" to="/carrito">
                <AiOutlineShoppingCart />
                Carrito <span className="red">{cantidad}</span>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

{
  /* <Container className="navbar" fluid>
      <div className="navbar-presentacion">
        <NavLink to="/">
          <CartWidget />
          { <h1>GrowShopOnline</h1> }
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
    </Container> */
}
