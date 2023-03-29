import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const MiddleHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="py-3 header-container">
      <Container fluid="sm" className="pe-0">
        <Row className="w-100 ">
          <Col md="2">
            <Navbar.Brand href="#home">
              <Link to="/" className="text-white header-brand">
                Dev Corner
              </Link>
            </Navbar.Brand>
          </Col>

          <Col md="5">
            <InputGroup>
              <Form.Control
                className="py-2 shadow-none"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                id="basic-addon2"
                className="p-3 header-search-icon-container"
              >
                <BsSearch className="fs-6" />
              </InputGroup.Text>
            </InputGroup>
          </Col>

          <Col md="5" className="pe-0">
            <div className="d-flex align-items-center justify-content-between ">
              <div>
                <Link
                  to="/"
                  className="d-flex align-items-center gap-10 text-white text-decoration-none"
                >
                  <img src="images/compare.svg" alt="compare" />
                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/"
                  className="d-flex align-items-center gap-10 text-white text-decoration-none"
                >
                  <img src="images/wishlist.svg" alt="wishlist" />
                  <p className="mb-0">
                    Favourite <br /> Wishlist
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/"
                  className="d-flex align-items-center gap-10 text-white text-decoration-none"
                >
                  <img src="images/user.svg" alt="user" />
                  <p className="mb-0">
                    Log in <br /> My Account
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/cart.svg" alt="cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 500</p>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MiddleHeader;
