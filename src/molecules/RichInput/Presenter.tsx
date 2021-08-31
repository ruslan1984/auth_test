import React, { FC, memo, InputHTMLAttributes } from "react";
import { Input } from "@atoms/index";
import { RichInput, ErrorText, Label } from "./style";
import cn from "classnames";

/**
 * RichInput. Представление
 * @param {string} errorText - текст при ошибке
 */

interface IPresenter extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
}

const Presenter: FC<IPresenter> = ({
  errorText,
  value,
  label,
  ...props
}: IPresenter) => {
  return (
    <RichInput className={cn({ inputError: errorText })}>
      <label htmlFor="">
        {label && <Label>{label}</Label>}
        <Input value={value} {...props} />
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </label>
    </RichInput>
  );
};

export default memo(Presenter);
