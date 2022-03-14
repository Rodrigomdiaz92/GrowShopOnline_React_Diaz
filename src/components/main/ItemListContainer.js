import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { useParams } from "react-router-dom";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";

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

const ItemListContainer = (greeting) => {
  /*  const miOnAdd = () => {}; */

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 1000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        if (categoria != undefined) {
          const listafiltro = productosIniciales.filter(
            (producto) => producto.categoria == categoria
          );
          setProductos(listafiltro);
        } else {
          setProductos(productosIniciales);
        }
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);

  return (
    <>
      <Container>
        {" "}
        <h1>Bienvenido a GrowShop Online {greeting.nombre}! </h1>
        <p>
          <MdLocationOn /> Aqui se muestran los productos disponibles segun tu
          ubicación: {greeting.ubicacion}{" "}
        </p>
        {/* <ItemCount onAdd={miOnAdd} stock={10} inicio={1} /> */}
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
