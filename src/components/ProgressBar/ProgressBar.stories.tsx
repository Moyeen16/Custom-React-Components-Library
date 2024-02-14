import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./index";
import { IProgressBarProps } from "../../models/IProgressBarProps";
const meta = {
    title: "ProgressBar",
    component: ProgressBar,
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
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const SimpleProgressBar = (args: IProgressBarProps) => {
    return (
        <div style={{ width: "200px" }}>
            <ProgressBar {...args} />
        </div>
    );
};
SimpleProgressBar.args = {
    completedPercent: 20,
};
export const ProgressBarWithSuccessColor = (args: IProgressBarProps) => {
    return (
        <div style={{ width: "200px" }}>
            <ProgressBar {...args} />
        </div>
    );
};
ProgressBarWithSuccessColor.args = {
    completedPercent: 100,
    showSuccessColor: true,
};
export const ProgressBarWithWarning = (args: IProgressBarProps) => {
    return (
        <div style={{ width: "200px" }}>
            <ProgressBar {...args} />
        </div>
    );
};
ProgressBarWithWarning.args = {
    completedPercent: 40,
    warning: true,
};
export const ProgressBarWithFailure = (args: IProgressBarProps) => {
    return (
        <div style={{ width: "200px" }}>
            <ProgressBar {...args} />
        </div>
    );
};
ProgressBarWithFailure.args = {
    completedPercent: 10,
    failure: true,
};
export const ProgressBarWithBackgroundColor = (args: IProgressBarProps) => {
    return (
        <div style={{ width: "200px" }}>
            <ProgressBar {...args} />
        </div>
    );
};
ProgressBarWithBackgroundColor.args = {
    completedPercent: 72,
    bgColor: "#EC7200",
};
