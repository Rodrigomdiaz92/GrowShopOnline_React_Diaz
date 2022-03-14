import { Route, Routes } from "react-router-dom";
import { Carrito } from "./main/Carrito";
import ItemDetailContainer from "./main/ItemDetailContainer";
import ItemListContainer from "./main/ItemListContainer";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer nombre="Rodrigo" ubicacion="Quilmes" />}
        />
        <Route
          path="/categoria/:categoria"
          element={<ItemListContainer nombre="Rodrigo" ubicacion="Quilmes" />}
        />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      {/*  <ItemListContainer nombre="Rodrigo" ubicacion="Quilmes" />
      <ItemDetailContainer /> */}
    </main>
  );
};

export default Main;
