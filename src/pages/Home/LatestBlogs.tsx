import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const cardsList = [
  {
    id: 1,
    imageSrc: "images/blog-1.jpg",
    date: "1 Apr, 2023",
    title: "A Beautiful Sunday Morning Renaissance",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae magni delectus sunt deserunt culpa.",
    buttonText: "Read More",
  },
  {
    id: 2,
    imageSrc: "images/blog-1.jpg",
    date: "1 Apr, 2023",
    title: "A Beautiful Sunday Morning Renaissance",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae magni delectus sunt deserunt culpa.",
    buttonText: "Read More",
  },
  {
    id: 3,
    imageSrc: "images/blog-1.jpg",
    date: "1 Apr, 2023",
    title: "A Beautiful Sunday Morning Renaissance",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae magni delectus sunt deserunt culpa.",
    buttonText: "Read More",
  },
  {
    id: 4,
    imageSrc: "images/blog-1.jpg",
    date: "1 Apr, 2023",
    title: "A Beautiful Sunday Morning Renaissance",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae magni delectus sunt deserunt culpa.",
    buttonText: "Read More",
  },
];

const LatestBlogs = () => {
  return (
    <section className="latest-blogs-wrapper home-wrapper-2 py-5">
      <Container fluid="xxl">
        <Row>
          <Col md="12">
            <h3 className="heading">Our Latest Blogs</h3>
          </Col>
          {cardsList.map((ele) => (
            <Col key={ele.id} md="3">
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={ele.imageSrc} />
                  <p className="date">{ele.date}</p>
                  <Card.Title>{ele.title}</Card.Title>
                  <Card.Text>{ele.body}</Card.Text>
                  <Link className="button" to="#">
                    {ele.buttonText}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestBlogs;
