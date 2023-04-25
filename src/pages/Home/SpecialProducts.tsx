import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

const SpecialProducts = () => (
  <section className="home-wrapper-2 py-5">
    <Container fluid="xxl">
      <Row>
        <Col md="12">
          <h3 className="heading">Special Products</h3>
        </Col>
      </Row>

      <Row>
        <Col md="6" className="mb-3">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="images/watch.jpg"
                />
                <div className="content">
                  <p className="brand">Havels</p>
                  <Card.Title>
                    Samsung Galaxy Note10+ Mobile Phone; sim...
                  </Card.Title>
                  <div className="stars">
                    <StarRatingComponent
                      name={"name1"}
                      starCount={5}
                      value={3}
                      // onStarClick={this.onStarClick.bind(this)}
                      editing={false}
                    />
                  </div>
                  <Card.Text className="price">
                    <span>$100</span> &nbsp; <del>$200</del>
                  </Card.Text>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>days
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                    <p>Product: 5</p>
                    <ProgressBar now={25} />
                  </div>
                  <Link to="#" className="button">
                    Add to cart
                  </Link>
                </div>
              </div>
            </Card.Body>
            {/* <Card.Img variant="top" src={ele.imageSrc} />
        
            <p className="date">{ele.date}</p>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>{ele.body}</Card.Text>
            <Link className="button" to="#">
              {ele.buttonText}
            </Link>
          */}
          </Card>
        </Col>
        <Col md="6" className="mb-3">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="images/watch.jpg"
                />
                <div className="content">
                  <p className="brand">Havels</p>
                  <Card.Title>
                    Samsung Galaxy Note10+ Mobile Phone; sim...
                  </Card.Title>
                  <div className="stars">
                    <StarRatingComponent
                      name={"name1"}
                      starCount={5}
                      value={3}
                      // onStarClick={this.onStarClick.bind(this)}
                      editing={false}
                    />
                  </div>
                  <Card.Text className="price">
                    <span>$100</span> &nbsp; <del>$200</del>
                  </Card.Text>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>days
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                    <p>Product: 5</p>
                    <ProgressBar now={25} />
                  </div>
                  <Link to="#" className="button">
                    Add to cart
                  </Link>
                </div>
              </div>
            </Card.Body>
            {/* <Card.Img variant="top" src={ele.imageSrc} />
        
            <p className="date">{ele.date}</p>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>{ele.body}</Card.Text>
            <Link className="button" to="#">
              {ele.buttonText}
            </Link>
          */}
          </Card>
        </Col>
        <Col md="6" className="mb-3">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="images/watch.jpg"
                />
                <div className="content">
                  <p className="brand">Havels</p>
                  <Card.Title>
                    Samsung Galaxy Note10+ Mobile Phone; sim...
                  </Card.Title>
                  <div className="stars">
                    <StarRatingComponent
                      name={"name1"}
                      starCount={5}
                      value={3}
                      // onStarClick={this.onStarClick.bind(this)}
                      editing={false}
                    />
                  </div>
                  <Card.Text className="price">
                    <span>$100</span> &nbsp; <del>$200</del>
                  </Card.Text>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>days
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                    <p>Product: 5</p>
                    <ProgressBar now={25} />
                  </div>
                  <Link to="#" className="button">
                    Add to cart
                  </Link>
                </div>
              </div>
            </Card.Body>
            {/* <Card.Img variant="top" src={ele.imageSrc} />
        
            <p className="date">{ele.date}</p>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>{ele.body}</Card.Text>
            <Link className="button" to="#">
              {ele.buttonText}
            </Link>
          */}
          </Card>
        </Col>
        <Col md="6" className="mb-3">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="images/watch.jpg"
                />
                <div className="content">
                  <p className="brand">Havels</p>
                  <Card.Title>
                    Samsung Galaxy Note10+ Mobile Phone; sim...
                  </Card.Title>
                  <div className="stars">
                    <StarRatingComponent
                      name={"name1"}
                      starCount={5}
                      value={3}
                      // onStarClick={this.onStarClick.bind(this)}
                      editing={false}
                    />
                  </div>
                  <Card.Text className="price">
                    <span>$100</span> &nbsp; <del>$200</del>
                  </Card.Text>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>days
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                      :
                      <span className="badge rounded-circle p-3 bg-danger">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                    <p>Product: 5</p>
                    <ProgressBar now={25} />
                  </div>
                  <Link to="#" className="button">
                    Add to cart
                  </Link>
                </div>
              </div>
            </Card.Body>
            {/* <Card.Img variant="top" src={ele.imageSrc} />
        
            <p className="date">{ele.date}</p>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>{ele.body}</Card.Text>
            <Link className="button" to="#">
              {ele.buttonText}
            </Link>
          */}
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default SpecialProducts;
