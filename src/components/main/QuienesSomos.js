import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const QuienesSomos = () => {
  return (
    <Container>
      <div className="presentacion">
        <div className="presentacion-imagen">
          <img src="/img/growshoponline.png" alt="" />
        </div>
        <div className="presentacion-texto">
          <h2>Somos GrowShopOnline</h2>
          <p>
            El e-commerce más completo en productos para cultivos y grow.¡Hacé
            tu pedido y obtené un 20% DE DESCUENTO en tu próxima compra!
          </p>
          <hr />
          <h2>Nuestras Redes:</h2>

          <h3>
            <AiFillFacebook /> @growshoponline
          </h3>
          <h3>
            <AiFillInstagram /> @growshoponline.ok
          </h3>
          <hr />
          <br />
          <NavLink className="contador-boton-agregar" to="/">
            Ir a Tienda
          </NavLink>
        </div>
      </div>

      <div className="tienda">
        <h2>Retira y abona tus productos por nuestro local ubicado en:</h2>
        <br />
        <h3>
          <ImLocation id="color" /> Av. Maipú 1755, Vicente López, Provincia de
          Buenos Aires
        </h3>
      </div>
    </Container>
  );
};

export default QuienesSomos;
