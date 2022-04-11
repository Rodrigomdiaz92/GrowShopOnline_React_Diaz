import { createContext, memo, useState } from "react";
import { toast } from "react-toastify";

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

  const addItem = (producto, count) => {
    let cartProductos = { producto, count };
    let carritoAuxiliar = [];

    if (isInCart(producto)) {
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
    toast.success("Se agrego el producto al carrito");
    setCarrito(carritoAuxiliar);
    setCargando(false);
  };

  const removeItem = (producto, count) => {
    if (isInCart(producto)) {
      const carritoAuxiliar = carrito.filter(
        (item) => item.producto.id !== producto.id
      );
      setTotal(total - producto.precio * count);
      setCantidad(cantidad - count);
      setCarrito(carritoAuxiliar);
      toast.info("Se elimino el producto del carrito");
    }
  };

  const removeLastItem = () => {
    if (carrito.length == 1) {
      clear();
    }
  };

  //Clear
  const clear = () => {
    setCarrito([]);
    setTotal(0);
    setCantidad(0);
    setCargando(true);
    toast.info("No hay productos en el carrito");
  };
  //isinCart
  const isInCart = (producto) => {
    return (
      carrito &&
      carrito.some((item) => {
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
        removeLastItem,
      }}
    >
      {children}
    </Provider>
  );
};

export default memo(CartContext);
