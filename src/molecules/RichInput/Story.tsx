import React from "react";
import RInput from "./Presenter";
import { withKnobs, text } from "@storybook/addon-knobs";
export default {
  title: "Molecules/RichInput",
  decorators: [withKnobs],
};

export const RichInput = () => {
  return (
    <>
      <RInput value={text("Text1", "")} errorText={text("ErrorText1", "")} />
      <RInput
        value={text("Text2", "Text")}
        errorText={text("ErrorText2", "Error")}
      />
    </>
  );
};
