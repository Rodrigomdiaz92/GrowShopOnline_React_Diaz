import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const miOnAdd = () => {};
  return (
    <>
      <p>{props.mensaje}</p>
      {props.producto.map((producto, indice) => {
        return (
          <div className="detalle-producto">
            <div className="detalle-producto-imagen">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="detalle-producto-info">
              <h2 className="detalle-titulo">
                {producto.categoria} {producto.nombre}
              </h2>
              <p className="detalle-origen"> Origen: {producto.origen}</p>
              <p className="detalle-precio">
                Precio por unidad: $ {producto.precio}
              </p>
              <p className="detalle-fabricante">
                Fabricante: {producto.nombre} {producto.origen}{" "}
              </p>
              <p className="detalle-web">
                {" "}
                <a href={producto.web}>{producto.web}</a>{" "}
              </p>
            </div>
            <div className="detalle-producto-compra">
              <div className="detalle-prodcuto-pickup">
                <h2>Retira tu compra por:</h2>
                <ul>
                  <li>local 1</li>
                  <li>local 2</li>
                  <li>local 3</li>
                </ul>
              </div>

              <div className="detalle-producto-contador">
                <ItemCount onAdd={miOnAdd} stock={producto.stock} inicio={1} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
