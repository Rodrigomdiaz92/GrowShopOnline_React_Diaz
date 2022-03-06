// Desarrolla la vista de un ítem donde item es de tipo

const Item = (props) => {
  return (
    <>
      {props.datos.map((producto, indice) => {
        return (
          <li>
            {producto.categoria} {producto.nombre}
          </li>
        );
      })}
    </>
  );
};

export default Item;
