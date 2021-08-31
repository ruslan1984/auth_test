import React, { FC } from "react";
import { BigLink } from "@atoms/index";
import { IndexPage, H1 } from "./styles";

/**
 * Главная страница
 * @returns
 */

const Index: FC = () => (
  <IndexPage className="fadeInIndex">
    <H1>Добро пожаловать</H1>
    <BigLink className="my-5" to="/auth">
      Авторизация
    </BigLink>
    <BigLink className="my-5" to="/register">
      Регистрация
    </BigLink>
  </IndexPage>
);

export default Index;
