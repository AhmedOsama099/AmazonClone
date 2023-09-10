import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta";
import Container from "react-bootstrap/Container";
import "./Store.scss";
import Filter from "./Filter";

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <Container fluid="xxl">
          <Filter />
        </Container>
      </div>
    </>
  );
};

export default OurStore;
