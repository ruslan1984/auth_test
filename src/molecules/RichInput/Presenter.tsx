import React, { FC, memo, InputHTMLAttributes } from "react";
import { Input } from "@atoms/index";
import { RichInput, ErrorText } from "./style";
import cn from "classnames";

/**
 * RichInput. Представление
 * @param {string} errorText - текст при ошибке
 */

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
        <Input
          className={cn({ inputError: errorText })}
          value={value}
          {...props}
        />
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </label>
    </RichInput>
  );
};

export default memo(Presenter);
