import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
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
