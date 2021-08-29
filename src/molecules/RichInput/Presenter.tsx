import React, { FC, memo, InputHTMLAttributes } from "react";
import { Input } from "@atoms/index";
import { RichInput, ErrorText } from "./style";

interface IPresenter extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const Presenter: FC<IPresenter> = ({
  errorText,
  value,
  ...props
}: IPresenter) => {
  return (
    <RichInput>
      <label htmlFor="">
        <Input value={value} {...props} />
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </label>
    </RichInput>
  );
};

export default memo(Presenter);
