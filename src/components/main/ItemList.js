import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <p>{props.mensaje}</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Item datos={props.productos} />
      </Row>
    </>
  );
};

export default ItemList;
