import { useState } from "react";
import { toast } from "react-toastify";

const ItemCount = (props) => {
  const [contador, modificador] = useState(props.inicio);

  const sumarStock = () => {
    if (contador >= props.stock) {
      toast.error("No hay mas stock");
    } else {
      modificador(contador + 1);
    }
  };

  const restarStock = () => {
    if (contador > 1) {
      modificador(contador - 1);
    } else {
      toast.warn("El minimo es una unidad");
    }
  };

  const restaurarStock = () => {
    modificador(props.inicio);
  };

  const agregarACarrito = () => {
    props.onAdd(contador);
  };

  return (
    <div className="contador">
      <div className="contador-suma-resta">
        <button className="contador-boton" onClick={restarStock}>
          -
        </button>
        <span>Comprar: {contador}</span>
        <button className="contador-boton" onClick={sumarStock}>
          +
        </button>
      </div>
      <div className="contador-final">
        <button className="contador-boton-borrar" onClick={restaurarStock}>
          BORRAR
        </button>
        <button className="contador-boton-agregar" onClick={agregarACarrito}>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
