import React, { FC, FormEventHandler, memo } from "react";
import { Button } from "@atoms/index";
import { RichInput } from "@molecules/index";
import { ErrorText } from "./style";

interface IPresenter {
  okMessage?: string;
  errorMessage?: string;
  loading?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: FormEventHandler<HTMLInputElement>;
}

const Presenter: FC<IPresenter> = ({
  loading,
  errorMessage,
  onSubmit,
  onChange,
}: IPresenter) => (
  <>
    <h1>Авторизация</h1>
    <form action="" onSubmit={onSubmit}>
      <RichInput
        onChange={onChange}
        name="login"
        type="text"
        placeholder="your login"
        required
      />
      <RichInput
        onChange={onChange}
        name="password"
        type="password"
        placeholder="your password"
        required
      />
      <Button loading={loading ? 1 : 0}>Отправить</Button>
    </form>
    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  </>
);

export default memo(Presenter);
