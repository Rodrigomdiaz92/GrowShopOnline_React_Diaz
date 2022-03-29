import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../Firebase";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => setProducto(res.data()))
      .then((resp) => setLoading(false))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(producto);

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
