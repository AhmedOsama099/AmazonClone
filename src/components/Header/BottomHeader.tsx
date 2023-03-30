import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
const BottomHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="py-3 header-container bottom-header"
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
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
  );
};

export default BottomHeader;
