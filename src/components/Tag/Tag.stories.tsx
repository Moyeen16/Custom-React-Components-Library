import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./index";
import { ITagProps } from "../../models/ITagProps";
const meta = {
    title: "Tag",
    component: Tag,
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
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const SimpleTag = (args: ITagProps) => {
    return <Tag {...args} />;
};
SimpleTag.args = { text: "Hello!" };
export const TagWithPresets = (args: ITagProps) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gridGap: "16px",
            }}
        >
            <Tag {...args} text={"Default"} />
            <Tag {...args} text={"Success"} success />
            <Tag {...args} text={"Processing"} processing />
            <Tag {...args} text={"Error"} error />
            <Tag {...args} text={"Warning"} warning />
        </div>
    );
};
TagWithPresets.args = {};
export const TagRounded = (args: ITagProps) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gridGap: "16px",
            }}
        >
            <Tag {...args} text={"Default"} />
            <Tag {...args} text={"Success"} success />
            <Tag {...args} text={"Processing"} processing />
            <Tag {...args} text={"Error"} error />
            <Tag {...args} text={"Warning"} warning />
        </div>
    );
};
TagRounded.args = { rounded: true };
export const TagWithCustomColors = (args: ITagProps) => {
    return <Tag {...args} />;
};
TagWithCustomColors.args = {
    text: "Orange",
    borderColor: "#ec7200",
    bgColor: "#ec720055",
    color: "#ec7200",
};
