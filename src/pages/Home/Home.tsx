import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.scss";

const smallContentSection1 = [
  {
    imageSource: "images/catbanner-01.jpg",
    h4Content: "BEST SALE",
    h5Content: "Laptops Max",
    pContent1: "From $1699.00 or",
    pContent2: "$64.62/mo",
  },

  {
    imageSource: "images/catbanner-02.jpg",
    h4Content: "New Arrival.",
    h5Content: "Buy IPad AIR",
    pContent1: "From $599 or",
    pContent2: "$49.91/mo for 12 mo.*",
  },
  {
    imageSource: "images/catbanner-03.jpg",
    h4Content: "SUPER CHARGED FOR PRO5.",
    h5Content: "iPad S13+ Pro",
    pContent1: "From $999.00 or",
    pContent2: " $41.62/mo",
  },
  {
    imageSource: "images/catbanner-03.jpg",
    h4Content: "SUPER CHARGED FOR PRO5.",
    h5Content: "iPad S13+ Pro",
    pContent1: "From $999.00 or",
    pContent2: " $41.62/mo",
  },
];
const Home = () => {
  return (
    <section>
      <Container fluid="xxl" className="home-wrapper-1 py-5">
        <Row>
          <Col md="6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPER CHARGED FOR PRO5.</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className="button" to="">
                  BUY NOW
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              {smallContentSection1.map((ele) => (
                <div className="small-banner position-relative">
                  <img
                    src={ele.imageSource}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>{ele.h4Content}</h4>
                    <h5>{ele.h5Content}</h5>
                    <p>
                      {ele.pContent1} <br /> {ele.pContent2}
                    </p>
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

// 01:47

export default Home;
