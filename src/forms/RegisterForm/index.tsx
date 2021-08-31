import React, { FC, FormEvent, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "./reducer";
import Presenter from "./Presenter";
import { RegisterDataType } from "./types";
import { reducerType } from "@store/reducers";
import { actions } from "./reducer";

/**
 * Форма регистрации
 */

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<RegisterDataType>({
    login: "",
    password: "",
    confirm_password: "",
    email: "",
  });
  const dispatch = useDispatch();
  const {
    loginErrorMessage,
    passwordErrorMessage,
    confirmPasswordErrorMessage,
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
    },
    [formData]
  );
  const onFocus = useCallback(() => dispatch(actions.clearErrorMessage()), []);

  return (
    <Presenter
      loginErrorMessage={loginErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      emailErrorMessage={emailErrorMessage}
      errorMessage={errorMessage}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      onFocus={onFocus}
    />
  );
};

export default RegisterForm;
