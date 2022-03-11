import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

let productoDetalle = [
  {
    id: 1,
    categoria: "Papelillos",
    nombre: "OCB",
    precio: 50,
    stock: 10,
    imagen: "ocbimg",
  },
];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productoDetalle);
      }, 5000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProducto(productoDetalle);
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      <Container>
        <ItemDetail
          mensaje={loading ? "Cargando.." : "Producto:"}
          producto={producto}
        />
      </Container>
    </>
  );
};

export default ItemDetailContainer;
