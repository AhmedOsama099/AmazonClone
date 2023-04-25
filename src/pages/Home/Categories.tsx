import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const categories = [
  {
    id: 1,
    imageSrc: "images/camera.jpg",
    h6Content: "Music & Gaming",
    pContent: "10 Items",
  },
  {
    id: 2,
    imageSrc: "images/camera.jpg",
    h6Content: "Cameras",
    pContent: "10 Items",
  },
  {
    id: 3,
    imageSrc: "images/tv.jpg",
    h6Content: "Smart TV",
    pContent: "10 Items",
  },
  {
    id: 4,
    imageSrc: "images/headphone.jpg",
    h6Content: "Smart Watches",
    pContent: "10 Items",
  },
  {
    id: 5,
    imageSrc: "images/camera.jpg",
    h6Content: "Music & Gaming",
    pContent: "10 Items",
  },
  {
    id: 6,
    imageSrc: "images/camera.jpg",
    h6Content: "Cameras",
    pContent: "10 Items",
  },
  {
    id: 7,
    imageSrc: "images/tv.jpg",
    h6Content: "Smart TV",
    pContent: "10 Items",
  },
  {
    id: 8,
    imageSrc: "images/headphone.jpg",
    h6Content: "Smart Watches",
    pContent: "10 Items",
  },
];

const Categories = () => {
  return (
    <section className="categories-wrapper home-wrapper-2 py-5">
      <Container fluid="xxl">
        <Row>
          <Col md="12">
            <div>
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                {categories.map((ele) => (
                  <div key={ele.id} className="d-flex align-items-center">
                    <div>
                      <h6>{ele.h6Content}</h6>
                      <p>{ele.pContent}</p>
                    </div>
                    <img src={ele.imageSrc} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
