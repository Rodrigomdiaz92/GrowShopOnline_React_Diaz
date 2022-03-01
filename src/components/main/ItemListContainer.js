import { Container } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";

const ItemListContainer = (greeting) => {
  return (
    <>
      <Container>
        {" "}
        <h1>Bienvenido a GrowShop Online {greeting.nombre}! </h1>
        <p>
          <MdLocationOn /> Aqui se muestran los productos disponibles segun tu
          ubicación: {greeting.ubicacion}{" "}
        </p>
      </Container>
    </>
  );
};

export default ItemListContainer;
