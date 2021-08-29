import React from "react";
import { Input as Inp } from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
export default {
  title: "Atoms/Input",
  decorators: [withKnobs],
};

export const Input = () => {
  return (
    <div className="container">
      <Inp value={text("Text", "Hello")} />
    </div>
  );
};
