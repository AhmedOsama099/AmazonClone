import "./Home.scss";
import MainBanner from "./MainBanner";
import Services from "./Services";
import Categories from "./Categories";
import MarqueeProducts from "./MarqueeProducts";
import LatestBlogs from "./LatestBlogs";
import FeaturedCollection from "./FeaturedCollection";
import SpecialProducts from "./SpecialProducts";
import OffersProducts from "./OffersProducts";

const Home = () => {
  return (
    <>
      <MainBanner />
      <Services />
      <Categories />
      <FeaturedCollection />
      <OffersProducts />
      <SpecialProducts />
      <MarqueeProducts />
      <LatestBlogs />
    </>
  );
};

export default Home;
