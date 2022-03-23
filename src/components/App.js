import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./contexto/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
