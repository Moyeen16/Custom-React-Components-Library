import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";
import { User } from "@styled-icons/boxicons-regular/User";
const meta = {
  title: "Avatar",
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const SimpleAvatar: Story = {
  args: {},
  render: (args) => <Avatar {...args}>A</Avatar>,
};

export const AvatarWithIcon: Story = {};
AvatarWithIcon.args = {
  icon: <User size={20} />,
};

export const AvatarWithPicture: Story = {};
AvatarWithPicture.args = {
  src: "https://picsum.photos/200",
  alt: "My Pic",
};

export const AvatarSizeSmall: Story = {
  args: {
    size: "small",
  },
  render: (args) => <Avatar {...args}>U</Avatar>,
};

export const AvatarSizeLarge: Story = {
  args: {
    size: "large",
  },
  render: (args) => <Avatar {...args}>U</Avatar>,
};

export const AvatarSizeCustom: Story = {
  args: {
    size: 40,
  },
  render: (args) => <Avatar {...args}>U</Avatar>,
};

export const AvatarSquare: Story = {
  args: {
    shape: "square",
  },
  render: (args) => (
    <div className="w-40 flex items-center justify-between">
      <Avatar {...args}>U</Avatar>
      <Avatar {...args}>
        <User size={20} />
      </Avatar>
      <Avatar {...args} src="https://picsum.photos/200" />
    </div>
  ),
};
