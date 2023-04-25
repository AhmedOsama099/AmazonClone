import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const OffersProducts = () => (
  <section className="offers-products-wrapper home-wrapper-2 py-5">
    <Container fluid="xxl">
      <Row>
        <Col md="3">
          <Card bg="dark">
            <Card.Body className="position-relative">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="images/famous-1.png"
              />
              <div className="famous-content position-absolute text-white">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 $16.62/mo. for 24 mo.*</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <Card.Body className="position-relative">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="images/famous-2.png"
              />
              <div className="famous-content position-absolute text-dark">
                <h5>Studio Display</h5>
                <h6>600 ints of brightness</h6>
                <p>27-inch 5k Retina display </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md="3">
          <Card>
            <Card.Body className="position-relative">
              <Card.Img
                className="img-fluid"
                variant="top"
                src="images/famous-3.png"
              />
              <div className="famous-content position-absolute text-dark">
                <h5>SMARTPHONES</h5>
                <h6>Smart Phone 13 Pro</h6>
                <p>
                  Now in green, from $999.00 or $41.62/mo. for 24 mo. footnote*
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md="3">
          <Card>
            <Card.Body className="position-relative">
              <Card.Img variant="top" src="images/famous-3.png" />
              <div className="famous-content position-absolute text-dark">
                <h5>HOME SPEAKERS</h5>
                <h6>Room-filling Sound</h6>
                <p>From &699 or $116.85/mo. for 12 mo.*</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default OffersProducts;
