import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./index";
import { IDropdownProps } from "../../models/IDropdownProps";

const meta = {
    title: "Dropdown",
    component: Dropdown,
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const SimpleDropdown = (args: IDropdownProps) => {
    return (
        <div style={{ width: "900px" }}>
            <Dropdown {...args} />
        </div>
    );
};
SimpleDropdown.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
};
export const DropdownWithParentWidth = (args: IDropdownProps) => {
    return (
        <div style={{ width: "700px" }}>
            <Dropdown {...args} />
        </div>
    );
};
DropdownWithParentWidth.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    noMaxWidth: true,
};
export const DropdownWithLongOptionsList = (args: IDropdownProps) => {
    return (
        <div
            style={{
                width: "80px",
                height: "200px",
                marginTop: "530px",
            }}
        >
            <Dropdown {...args} />
        </div>
    );
};
DropdownWithLongOptionsList.args = {
    options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
    ],
    noMaxWidth: true,
    responsive: true,
};
