import React from "react";
import { HeaderLink, BigLink as BLink } from "./index";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Atoms/Link",
};

export const Link = () => (
  <BrowserRouter>
    <HeaderLink active={1} to="/">
      Авторизация
    </HeaderLink>
    <HeaderLink to="/">Регистрация</HeaderLink>
  </BrowserRouter>
);

export const BigLink = () => (
  <div className="pt-25">
    <BrowserRouter>
      <BLink className="mr-5" to="/">
        Авторизация
      </BLink>
      <BLink to="/">Регистрация</BLink>
    </BrowserRouter>
  </div>
);
