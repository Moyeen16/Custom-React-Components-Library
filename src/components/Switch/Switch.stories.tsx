import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";
import Switch from "./index";
import { ISwitchProps } from "../../models/ISwitchProps";
const meta = {
  title: "Switch",
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const SimpleSwitch = (args: ISwitchProps) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Switch
        {...args}
        onChange={(val) => {
          setSelected(val);
        }}
      />
    </>
  );
};
SimpleSwitch.args = {
  defaultChecked: true,
};
export const SwitchWithLabel = (args: ISwitchProps) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div className="w-48 flex justify-around">
      <Switch
        {...args}
        onChange={(val) => {
          setSelected(val);
        }}
        labelChecked="Checked"
        labelNonChecked="Unchecked"
      />
      <Switch
        {...args}
        onChange={(val) => {
          setSelected(val);
        }}
        labelChecked="Yes"
        labelNonChecked="No"
      />
    </div>
  );
};
SwitchWithLabel.args = {
  defaultChecked: true,
  labelChecked: "Checked",
  labelNonChecked: "Unchecked",
};
export const SwitchDisabled = (args: ISwitchProps) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Switch
        {...args}
        onChange={(val) => {
          setSelected(val);
        }}
      />
    </>
  );
};
SwitchDisabled.args = {
  defaultChecked: true,
  disabled: true,
};
