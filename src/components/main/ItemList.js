import { Row } from "react-bootstrap";
import Item from "./Item";

// El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`

const ItemList = (props) => {
  return (
    <>
      <p>{props.mensaje}</p>
      {/* <div className="lista-productos">
        <Item datos={props.productos} />
      </div> */}
      <Row xs={1} md={2} lg={3} className="g-4">
        <Item datos={props.productos} />
      </Row>
    </>
  );
};

export default ItemList;
