import Item from "./Item";

// El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`

const ItemList = (props) => {
  return (
    <>
      <p>{props.mensaje}</p>
      <ul>
        <Item datos={props.productos} />
      </ul>
    </>
  );
};

export default ItemList;
