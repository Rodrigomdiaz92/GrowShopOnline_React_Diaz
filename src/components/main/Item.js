import ItemCount from "./ItemCount";

const Item = (props) => {
  const miOnAdd = () => {};
  return (
    <>
      {props.datos.map((producto, indice) => {
        return (
          <div className="producto">
            <img src="" alt={producto.nombre} />
            <h2 className="producto-titulo">
              {producto.nombre} {producto.categoria}
            </h2>
            <p className="producto-articulo">Articulo n°{producto.id}</p>
            <a className="producto-datos" href="#">
              Ver mas..
            </a>
            <p className="producto-precio">
              Precio por unidad: $ {producto.precio}
            </p>
            <ItemCount onAdd={miOnAdd} stock={producto.stock} inicio={1} />
          </div>
        );
      })}
    </>
  );
};

export default Item;
