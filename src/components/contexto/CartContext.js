import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  //const [total, setTotal] = useState(0);

  //Add
  const addItem = (producto, count) => {
    let cartProductos = { producto, count };

    let carritoAuxiliar = [];
    if (isInCart(producto)) {
      console.log(cartProductos);
      console.log(carrito);
      cartProductos = carrito.find((item) => item.producto.id === producto.id);
      cartProductos.count = cartProductos.count + count;
      carritoAuxiliar = [...carrito];
    } else {
      console.log("no estaba");
      carritoAuxiliar = [cartProductos, ...carrito];
    }
    console.log(carritoAuxiliar);
    setCarrito(carritoAuxiliar);
  };

  //Remove
  const removeItem = (producto) => {
    if (isInCart(producto)) {
      const carritoAuxiliar = carrito.filter(
        (item) => item.producto.id !== producto.id
      );
      setCarrito(carritoAuxiliar);
    }
  };
  //Clear
  const clear = () => {
    setCarrito([]);
  };
  //isinCart
  const isInCart = (producto) => {
    return (
      carrito &&
      carrito.some((item) => {
        console.log(item, producto);
        return item.producto.id === producto.id;
      })
    );
  };

  return (
    <Provider value={{ addItem, removeItem, clear, carrito }}>
      {children}
    </Provider>
  );
};

export default CartContext;
