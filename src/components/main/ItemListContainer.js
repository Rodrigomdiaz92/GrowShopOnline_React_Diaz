import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import ItemList from "./ItemList";

const ItemListContainer = (greeting) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria != undefined) {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", categoria)
      );
      getDocs(q)
        .then((resp) => setProductos(resp.docs.map((p) => p.data())))
        .then((resp) => setLoading(false))
        .catch((err) => console.log(err));
    } else {
      getDocs(collection(db, "productos"))
        .then((resp) => setProductos(resp.docs.map((p) => p.data())))
        .then((resp) => setLoading(false))
        .catch((err) => console.log(err));
    }
  }, [categoria]);

  console.log(productos);

  return (
    <>
      <Container>
        {" "}
        <h1>Bienvenido a GrowShop Online!</h1>
      </Container>
      <Container>
        <ItemList
          mensaje={loading ? "Cargando.." : "Productos disponibles:"}
          productos={productos}
        />
      </Container>
    </>
  );
};

export default ItemListContainer;
