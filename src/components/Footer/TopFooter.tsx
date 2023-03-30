import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const TopFooter = () => {
  return (
    <div className="py-3 top">
      <Container fluid="xxl">
        <Row className="align-items-center">
          <Col md="5">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className="mb-0">Sign Up for Newsletter</h2>
            </div>
          </Col>
          <Col md="7">
            <InputGroup>
              <Form.Control
                className="py-1 shadow-none"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                id="basic-addon2 "
                className="subscribe-button text-white p-2"
              >
                Subscribe
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopFooter;
