import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import ItemList from "./ItemList";
import { toast } from "react-toastify";

const ItemListContainer = () => {
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
        .catch((err) => toast.error("Ups, se ha producido un error"));
    } else {
      getDocs(collection(db, "productos"))
        .then((resp) => setProductos(resp.docs.map((p) => p.data())))
        .then((resp) => setLoading(false))
        .catch((err) => toast.error("Ups, se ha producido un error"));
    }
  }, [categoria]);

  return (
    <>
      <Container>
        {" "}
        <h1>Bienvenido a GrowShop Online!</h1>
      </Container>
      <Container>
        <ItemList
          mensaje={
            loading ? (
              <Spinner
                className="spinner"
                animation="border"
                variant="primary"
              />
            ) : (
              "Productos disponibles:"
            )
          }
          productos={productos}
        />
      </Container>
    </>
  );
};

export default ItemListContainer;
