import React, { FC } from "react";
import Layout from "@templates/Layout";
import AuthForm from "@/forms/AuthForm";

/**
 * Страница авторизации
 * @returns
 */
const Presenter: FC = () => (
  <Layout>
    <AuthForm />
  </Layout>
);

export default Presenter;
