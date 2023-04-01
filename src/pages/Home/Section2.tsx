import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const services = [
  {
    id: 1,
    imageSrc: "images/service.png",
    h6Content: "Free Shipping",
    pContent: "From all orders over $5",
  },
  {
    id: 2,
    imageSrc: "images/service-02.png",
    h6Content: "Daily Surprise Offers",
    pContent: "Save upto 25% off",
  },
  {
    id: 3,
    imageSrc: "images/service-03.png",
    h6Content: "Support 24/7",
    pContent: "Shop with an expret",
  },
  {
    id: 4,
    imageSrc: "images/service-04.png",
    h6Content: "Affordable Prices",
    pContent: "Get factory default price",
  },
  {
    id: 5,
    imageSrc: "images/service-05.png",
    h6Content: "Secure Payments",
    pContent: "100% protected payment",
  },
];

const Section2 = () => {
  return (
    <section>
      <Container fluid="xxl" className="home-wrapper-2 py-5">
        <Row>
          <Col md="12">
            <div className="d-flex justify-content-between align-items-center">
              {services.map((ele) => (
                <div key={ele.id} className="d-flex align-items-center gap-15">
                  <img src={ele.imageSrc} alt="service" />
                  <div>
                    <h6>{ele.h6Content}</h6>
                    <p className="mb-0">{ele.pContent}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section2;
