import { Fragment } from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";
import "./Header.scss";

const Header = () => {
  return (
    <Fragment>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </Fragment>
  );
};

export default Header;
