const ItemDetail = (props) => {
  return (
    <>
      <p>{props.mensaje}</p>
      <ul>
        {props.producto.map((producto, indice) => {
          return (
            <li>
              {producto.nombre} {producto.categoria} ${producto.precio} Stock
              Disponible:{producto.stock} unidades
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemDetail;
