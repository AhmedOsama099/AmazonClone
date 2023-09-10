import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "./BreadCrumb.scss";
import { IBreadCrumbProps } from "../../ts/interfaces";

const BreadCrumb: React.FC<IBreadCrumbProps> = (props) => {
  const { title } = props;
  return (
    <Container fluid="xxl" className="breadcrumb-wrapper">
      <Row>
        <Col md="12">
          <Breadcrumb className=" d-flex justify-content-center">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadCrumb;
