import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const marqueeList = [
  {
    id: 1,
    imageSrc: "images/brand-01.png",
  },
  {
    id: 2,
    imageSrc: "images/brand-02.png",
  },
  {
    id: 3,
    imageSrc: "images/brand-03.png",
  },
  {
    id: 4,
    imageSrc: "images/brand-04.png",
  },
  {
    id: 5,
    imageSrc: "images/brand-05.png",
  },
  {
    id: 6,
    imageSrc: "images/brand-06.png",
  },
  {
    id: 7,
    imageSrc: "images/brand-07.png",
  },
  {
    id: 8,
    imageSrc: "images/brand-08.png",
  },
];

const Section4 = () => {
  return (
    <section>
      <Container fluid="xxl" className="mqruee-wrapper py-5">
        <Row>
          <Col md="12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                {marqueeList.map((ele) => (
                  <div key={ele.id} className="mx-4 w-25">
                    <img src={ele.imageSrc} alt="brand" />
                  </div>
                ))}
              </Marquee>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section4;
