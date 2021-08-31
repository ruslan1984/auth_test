import React, { FC, InputHTMLAttributes, memo } from "react";
import Presenter from "./Presenter";

/**
 * Input с дополнительными параметрами
 * @param {string} errorText - текст при ошибке
 */

interface IRichInput extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const RichInput: FC<IRichInput> = ({ errorText, ...props }: IRichInput) => {
  return <Presenter errorText={errorText} {...props} />;
};

export default memo(RichInput);
