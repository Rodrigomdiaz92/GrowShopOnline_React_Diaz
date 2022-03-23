import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

let productosIniciales = [
  {
    id: 1,
    categoria: "Papelillos",
    nombre: "OCB",
    web: "https://www.ocb.cl/",
    origen: "Chile",
    precio: 50,
    stock: 10,
    imagen: "/img/Papelillos/ocbimg.png",
  },
  {
    id: 2,
    categoria: "Filtros",
    nombre: "OCB",
    web: "https://www.ocb.cl/",
    precio: 20,
    stock: 10,
    imagen: "/img/Filtros/ocbimg.png",
  },
  {
    id: 3,
    categoria: "Pipa",
    nombre: "OCB",
    web: "https://www.ocb.cl/",
    origen: "Chile",
    precio: 100,
    stock: 10,
    imagen: "/img/Pipa/ocbimg.png",
  },
  {
    id: 4,
    categoria: "Papelillos",
    nombre: "Rolling",
    web: "https://www.lionrollingcircus.com/",
    origen: "Argentina",
    precio: 60,
    stock: 10,
    imagen: "/img/Papelillos/rollingimg.png",
  },
  {
    id: 5,
    categoria: "Filtros",
    nombre: "Rolling",
    web: "https://www.lionrollingcircus.com/",
    origen: "Argentina",
    precio: 40,
    stock: 10,
    imagen: "/img/Filtros/rollingimg.png",
  },
  {
    id: 6,
    categoria: "Pipa",
    nombre: "Rolling",
    web: "https://www.lionrollingcircus.com/",
    origen: "Argentina",
    precio: 150,
    stock: 10,
    imagen: "/img/Pipa/rollingimg.png",
  },
];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 1000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        if (id != undefined) {
          const listafiltro = productosIniciales.find(
            (producto) => producto.id == id
          );
          setProducto(listafiltro);
        }
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
