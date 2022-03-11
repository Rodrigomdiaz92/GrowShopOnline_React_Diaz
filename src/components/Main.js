import ItemDetailContainer from "./main/ItemDetailContainer";
import ItemListContainer from "./main/ItemListContainer";

const Main = () => {
  return (
    <main>
      <ItemListContainer nombre="Rodrigo" ubicacion="Quilmes" />
      <ItemDetailContainer />
    </main>
  );
};

export default Main;
