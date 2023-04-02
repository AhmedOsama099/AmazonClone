import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";

const cardsList = [
  {
    id: 1,
    imageSrc: "images/watch.jpg",
    bradn: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 2,
    imageSrc: "images/watch.jpg",
    bradn: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 3,
    imageSrc: "images/watch.jpg",
    bradn: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 4,
    imageSrc: "images/watch.jpg",
    bradn: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 5,
    imageSrc: "images/watch.jpg",
    bradn: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
];

const Section6 = () => {
  return (
    <section>
      <Container fluid="xxl" className="home-wrapper-6  py-5">
        <Row>
          <Col md="12">
            <h3 className="heading">Featured Collection</h3>
          </Col>
          {cardsList.map((ele) => (
            <Col key={ele.id} md="3">
              <Card>
                <Card.Img variant="top" src={ele.imageSrc} />
                <Card.Body>
                  <p className="brand">{ele.bradn}</p>
                  <Card.Title className="title">{ele.title}</Card.Title>
                  <div className="stars">
                    <StarRatingComponent
                      name={ele.starsName}
                      starCount={5}
                      value={ele.startsValue}
                      // onStarClick={this.onStarClick.bind(this)}
                      editing={false}
                    />
                  </div>
                  <Card.Text className="price">{ele.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section6;
