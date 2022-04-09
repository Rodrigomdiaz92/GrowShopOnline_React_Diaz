import { Route, Routes } from "react-router-dom";
import { Carrito } from "./main/Carrito";
import ItemDetailContainer from "./main/ItemDetailContainer";
import ItemListContainer from "./main/ItemListContainer";
import QuienesSomos from "./main/QuienesSomos";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </main>
  );
};

export default Main;
