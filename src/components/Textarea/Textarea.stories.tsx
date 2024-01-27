import React from "react";
import type { Meta } from "@storybook/react";
import { IInputProps } from "../../models/IInputProps";
import Textarea from "./index";
// import { IMenuItemsProps } from "../../models/IMenuItemsProps";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Textarea",
  component: Textarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Textarea>;

export default meta;
// type Story = StoryObj<typeof Input>;

export const SimpleTextarea = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Textarea {...args} onChange={handleChange} value={value} />
    </>
  );
};

SimpleTextarea.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
};

export const TextareaWithValidation = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleValidation = (value: string | number) => {
    console.log("VALUE", value);
    const response = {
      error: value === "Moyeen" ? true : false,
      message: "Validation Failed",
    };
    return response;
  };
  return (
    <>
      <Textarea
        {...args}
        onChange={handleChange}
        value={value}
        validation={handleValidation(value)}
      />
    </>
  );
};

TextareaWithValidation.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
};
