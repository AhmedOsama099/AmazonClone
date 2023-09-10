import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Filter = () => {
  return (
    <Row className="filter-wrapper">
      <Col md="3">
        {/* Categorize */}
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col md="12">
                <h3 className="filter-title">Shop By Categories</h3>
              </Col>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </Row>
          </Card.Body>
        </Card>
        {/* Filter */}
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col md="12">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availabilty</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name=""
                      id=""
                    />
                    <label htmlFor="" className="form-check-label">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name=""
                      id=""
                    />
                    <label htmlFor="" className="form-check-label">
                      Out Of Stock (0)
                    </label>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <FloatingLabel controlId="floatingInputGrid" label="From">
                      <Form.Control type="email" placeholder="From" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInputGrid" label="To">
                      <Form.Control type="email" placeholder="To" />
                    </FloatingLabel>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <>
                    <Form.Label htmlFor="exampleColorInput">
                      Color picker
                    </Form.Label>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#563d7c"
                      title="Choose your color"
                    />
                  </>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Tags */}
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col md="12">
                <h3 className="filter-title">Product Tags</h3>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Random */}
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col md="12">
                <h3 className="filter-title">Random Product</h3>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Filter;
