import React, { FC, memo, FormEvent, useCallback, useState } from "react";
import Presenter from "./Presenter";
import { actions, loginRequest } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { LoginDataType } from "./types";
import { reducerType } from "@store/reducers";

/**
 * Форма авторизации
 */
const AuthForm: FC = () => {
  const [formData, setFormData] = useState<LoginDataType>({
    login: "",
    password: "",
  });
  const dispatch = useDispatch();

  const { okMessage, errorMessage, loading } = useSelector(
    (state: reducerType) => state.AuthReducer
  );
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
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
      onChange={onChange}
      onSubmit={onSubmit}
      okMessage={okMessage}
      errorMessage={errorMessage}
      loading={loading}
    />
  );
};

export default memo(AuthForm);
