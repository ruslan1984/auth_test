import React, { FC, ReactNode } from "react";
import Header from "@templates/Header";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }: ILayout) => (
  <>
    <Header />
    <div className="container pt-25">{children}</div>
  </>
);

export default Layout;
