import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";
import { ICheckboxProps } from "../../models/ICheckboxProps";
const meta = {
  title: "Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const SimpleCheckbox: Story = {
  render: (args) => <Checkbox {...args} />,
};
SimpleCheckbox.args = {
  id: "Checkbox1",
  defaultChecked: true,
  label: "Checkbox",
  required: true,
};

export const CheckboxDisabled: Story = {
  render: (args) => <Checkbox {...args} />,
};
CheckboxDisabled.args = {
  id: "Checkbox1",
  defaultChecked: true,
  label: "Checkbox 1",
  disabled: true,
};

export const ControlledCheckbox = (args: ICheckboxProps) => {
  const [value, setValue] = React.useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };
  return (
    <>
      <Checkbox
        {...args}
        id="Checkbox1"
        onChange={handleChange}
        checked={value}
        label="Checkbox"
      />
    </>
  );
};
