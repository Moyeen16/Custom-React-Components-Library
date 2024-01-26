import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./index";
import { IMenuItemsProps } from "../../models/IMenuItemsProps";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

const handleClick = (text: string) => {
  alert(text);
};

const menuItems1: IMenuItemsProps[] = [
  {
    label: "Home",
    onClick: () => handleClick("/home"),
    menuItems: [],
  },
  {
    label: "Products",
    onClick: () => handleClick("/products"),
    menuItems: [],
  },
  {
    label: "About",
    onClick: () => handleClick("/about"),
    menuItems: [],
  },
  {
    label: "Contact",
    onClick: () => handleClick("/contact"),
    menuItems: [],
  },
];
const menuItems2: IMenuItemsProps[] = [
  {
    label: "Home",
    onClick: () => handleClick("/home"),
    menuItems: [],
  },
  {
    label: "Products",
    menuItems: [
      {
        label: "Product 1",
        onClick: () => handleClick("/products/product_1"),
        menuItems: [],
      },
      {
        label: "Product 2",
        onClick: () => handleClick("/products/product_2"),
        menuItems: [],
      },
    ],
  },
  {
    label: "About",
    onClick: () => handleClick("/about"),
    menuItems: [],
  },
  {
    label: "Contact",
    onClick: () => handleClick("/contact"),
    menuItems: [],
  },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleMenu: Story = {
  args: {
    menuItems: menuItems1,
  },
  render: (args) => <Menu {...args} />,
};

export const NestedMenu: Story = {
  args: {
    menuItems: menuItems2,
  },
  render: (args) => <Menu {...args} />,
};
