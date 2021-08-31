import React, { FC } from "react";
import Layout from "@templates/Layout";
import RegisterForm from "@forms/RegisterForm";

/**
 * Страница регистрации
 * @returns
 */

const Presenter: FC = () => (
  <Layout>
    <RegisterForm />
  </Layout>
);

export default Presenter;
