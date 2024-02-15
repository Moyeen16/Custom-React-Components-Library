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
export const ProgressBarWithPercentage = (args: IProgressBarProps) => {
    return (
        <div className="grid grid-cols-4 gap-8 items-center">
            <div className="text-base font-medium">Size Default</div>
            <div className="text-base font-medium">Size Small</div>
            <div className="text-base font-medium">Size Medium</div>
            <div className="text-base font-medium">Size Large</div>
            <div style={{ width: "200px" }}>
                <ProgressBar {...args} showPercentage={true} />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar {...args} size="small" showPercentage={true} />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar {...args} size="medium" showPercentage={true} />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar {...args} size="large" showPercentage={true} />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar {...args} showPercentage={true} warning />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar
                    {...args}
                    size="small"
                    showPercentage={true}
                    warning
                />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar
                    {...args}
                    size="medium"
                    showPercentage={true}
                    warning
                />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar
                    {...args}
                    size="large"
                    showPercentage={true}
                    warning
                />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar {...args} showPercentage={true} failure />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar
                    {...args}
                    size="small"
                    showPercentage={true}
                    failure
                />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar
                    {...args}
                    size="medium"
                    showPercentage={true}
                    failure
                />
            </div>
            <div style={{ width: "200px" }}>
                <ProgressBar
                    {...args}
                    size="large"
                    showPercentage={true}
                    failure
                />
            </div>
        </div>
    );
};
ProgressBarWithPercentage.args = {
    completedPercent: 58,
};
export const ProgressBarWithSize = (args: IProgressBarProps) => {
    return (
        <div className="flex items-center justify-center gap-8">
            <div style={{ width: "200px" }}>
                <div className="text-base font-medium">Size Default</div>
                <ProgressBar {...args} />
            </div>
            <div style={{ width: "200px" }}>
                <div className="text-base font-medium">Size Small</div>
                <ProgressBar {...args} size="small" />
            </div>
            <div style={{ width: "200px" }}>
                <div className="text-base font-medium">Size Medium</div>
                <ProgressBar {...args} size="medium" />
            </div>
            <div style={{ width: "200px" }}>
                <div className="text-base font-medium">Size Large</div>
                <ProgressBar {...args} size="large" />
            </div>
        </div>
    );
};
ProgressBarWithSize.args = {
    completedPercent: 58,
    showPercentage: false,
};
