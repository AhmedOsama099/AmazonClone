import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const cardsList = [
  {
    id: 1,
    imageSrc1: "images/watch.jpg",
    imageSrc2: "images/watch-1.jpg",
    brand: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 2,
    imageSrc1: "images/watch.jpg",
    imageSrc2: "images/watch-1.jpg",
    brand: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 3,
    imageSrc1: "images/watch.jpg",
    imageSrc2: "images/watch-1.jpg",
    brand: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  {
    id: 4,
    imageSrc1: "images/watch.jpg",
    imageSrc2: "images/watch-1.jpg",
    brand: "Havels",
    title: "Kids Headphones bulk 10 pack multi colored for students",
    price: "$100.00",
    starsName: "name1",
    startsValue: 3,
    isStarsEditable: false,
  },
  // {
  //   id: 5,
  //   imageSrc1: "images/watch.jpg",
  //   imageSrc2: "images/watch-1.jpg",
  //   brand: "Havels",
  //   title: "Kids Headphones bulk 10 pack multi colored for students",
  //   price: "$100.00",
  //   starsName: "name1",
  //   startsValue: 3,
  //   isStarsEditable: false,
  // },
];

const FeaturedCollection = () => {
  return (
    <section className="featured-collection-wrapper home-wrapper-2 py-5">
      <Container fluid="xxl">
        <Row>
          <Col md="12">
            <h3 className="heading">Featured Collection</h3>
          </Col>
          {cardsList.map((ele) => (
            <Col key={ele.id} md="3">
              <Link to="#">
                <Card className="position-relative prodcut-card">
                  <div className="wishlist-icon position-absolute">
                    <Link to="#">
                      <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                  </div>
                  <div className="product-image">
                    <Card.Img variant="top" src={ele.imageSrc1} />
                    <Card.Img variant="top" src={ele.imageSrc2} />
                  </div>
                  <Card.Body>
                    <p className="brand">{ele.brand}</p>
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
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column  gap-15">
                      <Link to="#">
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link>
                      <Link to="#">
                        <img src="images/view.svg" alt="view" />
                      </Link>
                      <Link to="#">
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedCollection;
