import React, { FC, memo } from "react";
import { Header as HeaderStyle, Nav } from "./styles";
import { HeaderLink, SmallLink } from "@atoms/index";
import * as R from "@routing/routes";

interface IPresenter {
  currentRoute: string;
}

const Presenter: FC<IPresenter> = ({ currentRoute }: IPresenter) => (
  <HeaderStyle>
    <SmallLink to={R.index}>Index</SmallLink>
    <Nav>
      <HeaderLink active={currentRoute === R.auth ? 1 : 0} to={R.auth}>
        Авторизация
      </HeaderLink>
      <HeaderLink active={currentRoute === R.register ? 1 : 0} to={R.register}>
        Регистрация
      </HeaderLink>
    </Nav>
  </HeaderStyle>
);

export default memo(Presenter);
