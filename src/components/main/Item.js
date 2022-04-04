import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = (props) => {
  /* const miOnAdd = () => {}; */
  return (
    <>
      {props.datos.map((producto, indice) => {
        return (
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>
                  <h2 className="producto-titulo">
                    {producto.nombre} {producto.categoria}
                    <hr />
                  </h2>
                </Card.Title>
                <Card.Text>
                  <p className="producto-precio">
                    Precio por unidad: $ {producto.precio}
                  </p>
                  <p className="producto-precio">Origen: {producto.origen}</p>
                </Card.Text>

                <Button variant="primary">
                  <Link
                    className="producto-datos"
                    to={`/producto/${producto.id}`}
                  >
                    {" "}
                    Ver mas..{" "}
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default Item;
/*
{props.datos.map((producto, indice) => {
  return (
    <div className="producto">
      <div className="producto-img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <h2 className="producto-titulo">
        {producto.nombre} {producto.categoria}
      </h2>
      <p className="producto-articulo">Articulo n°{producto.id}</p>
      <Link className="producto-datos" to={`/producto/${producto.id}`}>
        {" "}
        Ver mas..{" "}
      </Link>
      <p className="producto-precio">
        Precio por unidad: $ {producto.precio}
      </p>
      
    </div>
  );
})}    */
