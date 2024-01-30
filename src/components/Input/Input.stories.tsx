import React from "react";
import type { Meta } from "@storybook/react";
import Input from "./index";
import { IInputProps } from "../../models/IInputProps";
import { CircleInfo } from "@styled-icons/fa-solid/CircleInfo";
import { CircleWithCross } from "@styled-icons/entypo/CircleWithCross";
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

export const InputWithClear = (args: IInputProps) => {
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

InputWithClear.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
  allowClear: true,
};

export const InputWithClearIcon = (args: IInputProps) => {
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

InputWithClearIcon.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
  allowClear: true,
  clearIcon: <CircleWithCross size={16} />,
};
export const InputWithCount = (args: IInputProps) => {
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

InputWithCount.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
  allowClear: true,
  showCount: true,
  maxLength: 30,
};
export const InputWithCountFormatter = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const countFormatter = (count: number) => {
    return <div>Len : {count}</div>;
  };
  return (
    <>
      <Input
        {...args}
        onChange={handleChange}
        value={value}
        countFormatter={countFormatter}
      />
    </>
  );
};

InputWithCountFormatter.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "text",
  allowClear: true,
  showCount: true,
  maxLength: 30,
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

export const InputPassword = (args: IInputProps) => {
  const [value, setValue] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const passwordToggle = (toggleValue: boolean) => {
    setShowPassword(toggleValue);
  };

  return (
    <>
      <Input
        {...args}
        onChange={handleChange}
        value={value}
        visibilityToggle={{
          visible: showPassword,
          onVisibleChange: passwordToggle,
        }}
      />
    </>
  );
};

InputPassword.args = {
  label: "Label",
  placeholder: "Enter text here",
  required: true,
  type: "password",
};
