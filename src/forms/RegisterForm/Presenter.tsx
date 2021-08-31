import React, { FC, FormEvent, FormEventHandler, memo } from "react";
import { Button } from "@atoms/index";
import { RichInput } from "@molecules/index";
import { ErrorText } from "./style";

/**
 * Форма регистрации. Представление
 * @param {string} loginErrorMessage
 * @param {string} passwordErrorMessage
 * @param {string} confirmPasswordErrorMessage
 * @param {string} emailErrorMessage
 * @param {string} errorMessage
 * @param {boolean} loading
 * @param {FormEventHandler<HTMLFormElement>} onSubmit
 * @param {FormEventHandler<HTMLInputElement>} onChange
 */

interface IPresenter {
  loginErrorMessage?: string;
  passwordErrorMessage?: string;
  confirmPasswordErrorMessage?: string;
  emailErrorMessage?: string;
  errorMessage?: string;
  loading?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: FormEventHandler<HTMLInputElement>;
  onFocus: FormEventHandler<HTMLInputElement>;
}

const Presenter: FC<IPresenter> = ({
  loginErrorMessage,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  emailErrorMessage,
  errorMessage,
  loading,
  onChange,
  onSubmit,
  onFocus,
}: IPresenter) => (
  <div className="fadeIn">
    <h1>Регистрация</h1>
    <form action="" onSubmit={onSubmit}>
      <RichInput
        label="Логин"
        onChange={onChange}
        onFocus={onFocus}
        name="login"
        type="text"
        placeholder="your login"
        errorText={loginErrorMessage}
      />
      <RichInput
        label="Пароль"
        onChange={onChange}
        onFocus={onFocus}
        name="password"
        type="password"
        placeholder="your password"
        errorText={passwordErrorMessage}
      />
      <RichInput
        label="Подтверждение пароля"
        onChange={onChange}
        onFocus={onFocus}
        name="confirm_password"
        type="password"
        placeholder="confirm password"
        errorText={confirmPasswordErrorMessage}
      />
      <RichInput
        label="Еmail"
        onChange={onChange}
        onFocus={onFocus}
        name="email"
        type="email"
        placeholder="your email"
        errorText={emailErrorMessage}
      />
      <Button loading={loading ? 1 : 0}>Отправить</Button>
    </form>
    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  </div>
);

export default memo(Presenter);
