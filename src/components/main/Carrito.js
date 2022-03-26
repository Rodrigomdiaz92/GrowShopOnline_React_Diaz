import { Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import CartDetail from "./CartDetail";
import { NavLink } from "react-router-dom";

export const Carrito = () => {
  const { cargando } = useContext(contexto);

  return (
    <>
      {cargando ? (
        <h2 className="titulo-no-cart">
          No hay productos seleccionados{" "}
          <NavLink className="contador-boton-agregar" to="/">
            Ir a Tienda
          </NavLink>
        </h2>
      ) : (
        <CartDetail />
      )}
    </>
  );
};
