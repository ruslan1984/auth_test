import React, { FC, FormEvent, FormEventHandler, memo } from "react";
import { Button } from "@atoms/index";
import { RichInput } from "@molecules/index";
import { ErrorText } from "./style";

/**
 * Форма регистрации. Представление
 * @param {string} loginErrorMessage
 * @param {string} passwordErrorMessage
 * @param {string} emailErrorMessage
 * @param {string} errorMessage
 * @param {boolean} loading
 * @param {FormEventHandler<HTMLFormElement>} onSubmit
 * @param {FormEventHandler<HTMLInputElement>} onChange
 */

interface IPresenter {
  loginErrorMessage?: string;
  passwordErrorMessage?: string;
  emailErrorMessage?: string;
  errorMessage?: string;
  loading?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange?: FormEventHandler<HTMLInputElement>;
}

const Presenter: FC<IPresenter> = ({
  loginErrorMessage,
  passwordErrorMessage,
  emailErrorMessage,
  errorMessage,
  loading,
  onChange,
  onSubmit,
}: IPresenter) => (
  <>
    <h1>Регистрация</h1>
    <form action="" onSubmit={onSubmit}>
      <RichInput
        onChange={onChange}
        name="login"
        type="text"
        placeholder="your login"
        errorText={loginErrorMessage}
      />
      <RichInput
        onChange={onChange}
        name="password"
        type="text"
        placeholder="your password"
        errorText={passwordErrorMessage}
      />
      <RichInput
        onChange={onChange}
        name="email"
        type="email"
        placeholder="your email"
        errorText={emailErrorMessage}
      />
      <Button loading={loading ? 1 : 0}>Отправить</Button>
    </form>
    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  </>
);

export default memo(Presenter);
