import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
const MiddleFooter = () => {
  return (
    <div className="middle py-4">
      <Container fluid="xxl">
        <Row className="align-items-start">
          <Col md="4" className="mb-4">
            <h4>Contact Us</h4>
            <div>
              <address className="fs-5">
                Shbeen Elkom - Menofia <br /> Egypt <br /> Pincode: 12345
              </address>
              <a href="tel:+20 01011494459" className="mt-3 d-block mb-1">
                +20 01011494459
              </a>
              <a
                href="mailto:ahmedeng099@gmail.com"
                className="mt-2 d-block mb-0"
              >
                ahmedeng099@gmail.com
              </a>
              <div className="d-flex align-items-center gap-30 mt-2">
                <a href="">
                  <BsLinkedin className="fs-4" />
                </a>
                <a href="">
                  <BsInstagram className="fs-4" />
                </a>
                <a href="">
                  <BsLinkedin className="fs-4" />
                </a>
                <a href="">
                  <BsGithub className="fs-4" />
                </a>
                <a href="">
                  <BsFacebook className="fs-4" />
                </a>
              </div>
            </div>
          </Col>
          <Col md="3" className="mb-4">
            <h4>Information</h4>
            <div className="d-flex flex-column">
              <Link className="py-2 mb-1" to="">
                Privacy Policy
              </Link>
              <Link className="py-2 mb-1" to="">
                Refud Policy
              </Link>
              <Link className="py-2 mb-1" to="">
                Shipping Policy
              </Link>
              <Link className="py-2 mb-1" to="">
                Terms & Conditions
              </Link>
              <Link className="py-2 mb-1" to="">
                Blogs
              </Link>
            </div>
          </Col>
          <Col md="3" className="mb-4">
            <h4>Account</h4>
            <div className="d-flex flex-column">
              <Link className="py-2 mb-1" to="">
                About Us
              </Link>
              <Link className="py-2 mb-1" to="">
                FAQs
              </Link>
              <Link className="py-2 mb-1" to="">
                Contact
              </Link>
            </div>
          </Col>
          <Col md="2" className="mb-4">
            <h4>Quick Links</h4>
            <div className="d-flex flex-column">
              <Link className="py-2 mb-1" to="">
                Laptops
              </Link>
              <Link className="py-2 mb-1" to="">
                Headphones
              </Link>
              <Link className="py-2 mb-1" to="">
                Tablets
              </Link>
              <Link className="py-2 mb-1" to="">
                Watch
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddleFooter;
