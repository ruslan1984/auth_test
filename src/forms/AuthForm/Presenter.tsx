import React, { FC, FormEventHandler, memo } from "react";
import { Input, Button } from "@atoms/index";

interface IPresenter {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: FormEventHandler<HTMLInputElement>;
}

const Presenter: FC<IPresenter> = ({ onSubmit, onChange }: IPresenter) => (
  <>
    <h1>Авторизация</h1>
    <form action="" onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        name="login"
        type="text"
        placeholder="your login"
        required
        defaultValue=""
      />
      <Input
        onChange={onChange}
        name="password"
        type="password"
        placeholder="your password"
        defaultValue=""
        required
      />
      <Button>Отправить</Button>
    </form>
  </>
);

export default memo(Presenter);
