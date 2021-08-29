import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import Presenter from "./Presenter";

const Header: FC = () => {
  const location = useLocation();
  return <Presenter currentRoute={location.pathname} />;
};

export default Header;
