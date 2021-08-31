import React, { FC, InputHTMLAttributes, memo } from "react";
import Presenter from "./Presenter";

/**
 * Input с дополнительными параметрами
 * @param {string} label - текст
 * @param {string} errorText - текст при ошибке
 */

interface IRichInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
}

const RichInput: FC<IRichInput> = ({
  errorText,
  label,
  ...props
}: IRichInput) => {
  return <Presenter errorText={errorText} label={label} {...props} />;
};

export default memo(RichInput);
