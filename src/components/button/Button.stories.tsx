import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const handleClick = (text: string) => {
  alert(text);
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: {
    primary: true,
    onClick: () => handleClick("Simple Button clicked!"),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};

export const PrimaryHoverTransitionButton: Story = {
  args: {
    primary: true,
    transition: true,
    onClick: () => handleClick("Simple Button clicked!"),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};

export const TransparentButton: Story = {
  args: {
    transparent: true,
    onClick: () => handleClick("Simple Button clicked!"),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};

export const TransparentHoverTransitionButton: Story = {
  args: {
    transparent: true,
    transition: true,
    onClick: () => handleClick("Transparent Transition Button clicked!"),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};

export const AlternateButton: Story = {
  args: {
    alternate: true,
    onClick: () => handleClick("Simple Button clicked!"),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};

export const AlternateHoverTransitionButton: Story = {
  args: {
    alternate: true,
    transition: true,
    onClick: () => handleClick("Transparent Transition Button clicked!"),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};
