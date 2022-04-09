import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                alt="GrowshopOnline"
                src="/icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              GrowShopOnline
            </Navbar.Brand>
          </NavLink>
          <Navbar.Brand>
            <AiFillFacebook /> <AiFillInstagram />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
