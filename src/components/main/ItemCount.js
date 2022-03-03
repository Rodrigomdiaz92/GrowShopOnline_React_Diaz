import { useState } from "react";

const ItemCount = (props) => {
  const [contador, modificador] = useState(props.inicio);

  const sumarStock = () => {
    if (contador >= props.stock) {
      alert("No hay mas stock");
    } else {
      modificador(contador + 1);
    }
  };

  const restarStock = () => {
    if (contador > 1) {
      modificador(contador - 1);
    } else {
      alert("El minimo es una unidad");
    }
  };

  const restaurarStock = () => {
    modificador(props.inicio);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={sumarStock}>Sumar</button>
      <button onClick={restarStock}>Restar</button>
      <button onClick={restaurarStock}>Restaurar</button>
      <button onClick={props.onAdd}>AGREGAR AL CARRITO</button>
    </div>
  );
};

export default ItemCount;
