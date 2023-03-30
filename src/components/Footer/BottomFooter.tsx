import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const year = new Date().getFullYear();
const BottomFooter = () => {
  return (
    <div className="bottom py-4">
      <Container fluid="xxl">
        <Row>
          <Col md="12">
            <p className="text-center mb-0">
              &copy; {year}; Powered by Ahmed Osama.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomFooter;
