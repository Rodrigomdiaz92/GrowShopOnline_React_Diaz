import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

let productosIniciales = [
  {
    id: 1,
    categoria: "Papelillos",
    nombre: "OCB",
    precio: 50,
    stock: 10,
    imagen: "ocbimg",
  },
  {
    id: 2,
    categoria: "Filtros",
    nombre: "OCB",
    precio: 20,
    stock: 10,
    imagen: "ocbimg",
  },
  {
    id: 3,
    categoria: "Pipa",
    nombre: "OCB",
    precio: 100,
    stock: 10,
    imagen: "ocbimg",
  },
  {
    id: 4,
    categoria: "Papelillos",
    nombre: "Rolling",
    precio: 60,
    stock: 10,
    imagen: "rollingimg",
  },
  {
    id: 5,
    categoria: "Filtros",
    nombre: "Rolling",
    precio: 40,
    stock: 10,
    imagen: "rollingimg",
  },
  {
    id: 6,
    categoria: "Pipa",
    nombre: "Rolling",
    precio: 150,
    stock: 10,
    imagen: "rollingimg",
  },
];

const ItemListContainer = (greeting) => {
  const miOnAdd = () => {};

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 5000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProductos(productosIniciales);
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
        {" "}
        <h1>Bienvenido a GrowShop Online {greeting.nombre}! </h1>
        <p>
          <MdLocationOn /> Aqui se muestran los productos disponibles segun tu
          ubicación: {greeting.ubicacion}{" "}
        </p>
        <ItemCount onAdd={miOnAdd} stock={10} inicio={1} />
      </Container>
      <Container>
        <ItemList
          mensaje={loading ? "Cargand.." : "Productos disponibles:"}
          productos={productos}
        />
      </Container>
    </>
  );
};

export default ItemListContainer;
