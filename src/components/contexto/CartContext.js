import { createContext, memo, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [pedido, setPedido] = useState("");

  const ordenDeCompra = (id) => {
    setPedido(id);
  };

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
      setTotal(total + cartProductos.producto.precio * count);
      setCantidad(cantidad + count);
    } else {
      console.log("no estaba");
      carritoAuxiliar = [cartProductos, ...carrito];
      setTotal(total + cartProductos.producto.precio * cartProductos.count);
      setCantidad(cantidad + cartProductos.count);
    }
    console.log(carritoAuxiliar);
    setCarrito(carritoAuxiliar);
    setCargando(false);

    console.log(total);
  };

  //Remove
  const removeItem = (producto, count) => {
    if (isInCart(producto)) {
      const carritoAuxiliar = carrito.filter(
        (item) => item.producto.id !== producto.id
      );
      setTotal(total - producto.precio * count);
      setCantidad(cantidad - count);
      setCarrito(carritoAuxiliar);
    }
    /*  if (carrito.length == 0) {
      setCargando(true);
    } */
  };
  //Clear
  const clear = () => {
    setCarrito([]);
    setTotal(0);
    setCantidad(0);
    setCargando(true);
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
    <Provider
      value={{
        addItem,
        removeItem,
        clear,
        carrito,
        total,
        cantidad,
        cargando,
        ordenDeCompra,
        pedido,
      }}
    >
      {children}
    </Provider>
  );
};

export default memo(CartContext);
