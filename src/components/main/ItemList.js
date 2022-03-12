import Item from "./Item";

// El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`

const ItemList = (props) => {
  return (
    <>
      <p>{props.mensaje}</p>
      <div className="lista-productos">
        <Item datos={props.productos} />
      </div>
    </>
  );
};

export default ItemList;
