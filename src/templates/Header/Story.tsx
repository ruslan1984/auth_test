import React from "react";
import Presenter from "./Presenter";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Templates/Header",
};

export const Header = () => {
  return (
    <BrowserRouter>
      <Presenter />
    </BrowserRouter>
  );
};
