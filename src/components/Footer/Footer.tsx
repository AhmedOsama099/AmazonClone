import BottomFooter from "./BottomFooter";
import MiddleFooter from "./MiddleFooter";
import TopFooter from "./TopFooter";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container text-white">
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
