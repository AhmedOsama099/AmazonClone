import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" className="py-3 header-container">
        <Container fluid="xxl">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* //// */}
      <Navbar collapseOnSelect expand="lg" className="py-3 header-container">
        <Container fluid="xxl">
          <Row className="w-100">
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

            <Col md="5">
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

      {/* //// */}
      <Navbar
        style={{ backgroundColor: "var(--color-232f3e)" }}
        collapseOnSelect
        expand="lg"
        className="py-3 header-container"
      >
        <Container fluid="xxl">
          <Row className="w-100">
            <Col md="12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Shop Categories"
                    menuVariant="dark"
                    className="text-white d-flex align-items-center gap-15 header-nav-dropdown "
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
