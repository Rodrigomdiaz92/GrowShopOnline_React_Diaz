import { Container } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>©GrowShopOnline 2021 Company, Inc</p>
        <p>
          {" "}
          <AiFillInstagram /> <AiFillFacebook />{" "}
        </p>{" "}
      </Container>{" "}
    </footer>
  );
};

export default Footer;
