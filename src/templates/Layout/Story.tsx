import React from "react";
import Presenter from "./index";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Templates/Layout",
};

export const Layout = () => {
  return (
    <BrowserRouter>
      <Presenter>Some text</Presenter>
    </BrowserRouter>
  );
};
