import React from "react";
import type { Meta } from "@storybook/react";
import Input from "./index";
import { IInputProps } from "../../models/IInputProps";
import { CircleInfo } from "@styled-icons/fa-solid/CircleInfo";
// import { IMenuItemsProps } from "../../models/IMenuItemsProps";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Input",
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
// type Story = StoryObj<typeof Input>;

export const SimpleInput = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Input {...args} onChange={handleChange} value={value} />
    </>
  );
};

SimpleInput.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
};

export const InputWithPrefixSuffix = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input {...args} onChange={handleChange} value={value} />
    </>
  );
};

InputWithPrefixSuffix.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
  prefix: "pr",
  suffix: "sf",
};

export const InputWithSuffixIcon = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input {...args} onChange={handleChange} value={value} />
    </>
  );
};

InputWithSuffixIcon.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
  prefix: "pr",
  suffix: (
    <CircleInfo title={"More info"} size={14} style={{ color: "lightgrey" }} />
  ),
};

export const InputWithValidation = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Input
        {...args}
        onChange={handleChange}
        value={value}
        validation={handleValidation(value)}
      />
    </>
  );
};

InputWithValidation.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
};
