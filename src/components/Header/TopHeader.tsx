import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const TopHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="py-3 header-container">
      <Container fluid="xxl">
        <Nav className="me-auto">
          <p className="text-white mb-0">
            Free Shipping Over $100 and Free Returns
          </p>
        </Nav>
        <Nav>
          <p className="text-white mb-0">
            Hotline: <a href="tel:+20 01011494459">+20 01011494459</a>
          </p>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
