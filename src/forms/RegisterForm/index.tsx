import React, { FC, FormEvent, useCallback, useState } from "react";
import Presenter from "./Presenter";

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState({});
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const onChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  return <Presenter onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterForm;
