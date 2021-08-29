import React, { FC, InputHTMLAttributes } from "react";
import Presenter from "./Presenter";

interface IRichInput extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const RichInput: FC<IRichInput> = ({ errorText, ...props }: IRichInput) => {
  return <Presenter errorText={errorText} {...props} />;
};

export default RichInput;
