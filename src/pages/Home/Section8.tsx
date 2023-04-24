import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

const Section7 = () => (
  <section>
    <Container fluid="xxl" className="special-wrapper  py-5 home-wrapper-8">
      <Row>
        <Col md="12">
          <h3 className="heading">Our Popular Products</h3>
        </Col>
        <Row>
          {/* <Col md="2">
            <Card></Card>
          </Col>
          <Col md="2">
            <Card></Card>
          </Col> */}
        </Row>
      </Row>
    </Container>
  </section>
);

export default Section7;
