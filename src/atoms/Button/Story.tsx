import React from "react";
import { Button as Btn } from "./index";

export default {
  title: "Atoms/Button",
};

export const Button = () => (
  <div className="container">
    <Btn className="mb-5">Отправить</Btn>
    <Btn loading={1}>Загрузка</Btn>
  </div>
);
