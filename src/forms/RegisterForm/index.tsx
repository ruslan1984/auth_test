import React, { FC, FormEvent, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "./reducer";
import Presenter from "./Presenter";
import { RegisterDataType } from "./types";
import { reducerType } from "@store/reducers";
import { actions } from "./reducer";

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<RegisterDataType>({
    login: "",
    password: "",
    email: "",
  });
  const dispatch = useDispatch();
  const {
    loginErrorMessage,
    passwordErrorMessage,
    emailErrorMessage,
    errorMessage,
    loading,
  } = useSelector((state: reducerType) => state.RegisterReducer);

  useEffect(() => () => dispatch(actions.clearErrorMessage()), []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registerRequest(formData));
  };
  const onChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: value });
      dispatch(actions.clearErrorMessage());
    },
    [formData]
  );

  return (
    <Presenter
      loginErrorMessage={loginErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      emailErrorMessage={emailErrorMessage}
      errorMessage={errorMessage}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
