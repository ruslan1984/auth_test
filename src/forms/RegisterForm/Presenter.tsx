import React, { FC, FormEventHandler } from "react";
import { Input, Button } from "@atoms/index";

interface IPresenter {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: FormEventHandler<HTMLInputElement>;
}

const Presenter: FC<IPresenter> = ({ onChange, onSubmit }: IPresenter) => (
  <>
    <h1>Регистрация</h1>
    <form action="" onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        name="login"
        type="login"
        placeholder="your login"
        required
      />
      <Input
        onChange={onChange}
        name="password"
        type="text"
        placeholder="your password"
        required
      />
      <Input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="your email"
        required
      />
      <Button>Отправить</Button>
    </form>
  </>
);

export default Presenter;
