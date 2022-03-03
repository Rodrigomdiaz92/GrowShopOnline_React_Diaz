import { Container } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import ItemCount from "./ItemCount";

const ItemListContainer = (greeting) => {
  const miOnAdd = () => {};

  return (
    <>
      <Container>
        {" "}
        <h1>Bienvenido a GrowShop Online {greeting.nombre}! </h1>
        <p>
          <MdLocationOn /> Aqui se muestran los productos disponibles segun tu
          ubicación: {greeting.ubicacion}{" "}
        </p>
        <ItemCount onAdd={miOnAdd} stock={10} inicio={1} />
      </Container>
    </>
  );
};

export default ItemListContainer;
