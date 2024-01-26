import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TopNavbar from "./index";
import { BrowserRouter } from "react-router-dom";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "TopNavbar",
  component: TopNavbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof TopNavbar>;

export default meta;
type Story = StoryObj<typeof TopNavbar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleTopNavbar: Story = {
  args: {
    applicationName: "Custom Application Name",
  },
  render: (args) => (
    <BrowserRouter>
      <TopNavbar {...args} />
    </BrowserRouter>
  ),
};
