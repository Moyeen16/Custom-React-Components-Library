import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IModalProps } from "../../models/IModalPops";

import Button from "../Button";
import Drawer from "./index";
const meta = {
    title: "Drawer",
    component: Drawer,
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
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

export const SimpleDrawer = (args: IModalProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Button primary onClick={() => setIsOpen(true)}>
                Open Drawer
            </Button>
            <Drawer
                {...args}
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                onCancel={() => setIsOpen(false)}
                onOk={() => setIsOpen(false)}
            >
                <div style={{ width: "500px" }}>
                    <h1>Basic Simple Drawer</h1>
                    <div>Contents</div>
                    <div>Contents</div>
                    <div>Contents</div>
                </div>
            </Drawer>
        </div>
    );
};
SimpleDrawer.args = { hideFooter: false };

export const DrawerOpeningOnLeft = (args: IModalProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Button primary onClick={() => setIsOpen(true)}>
                Open Drawer
            </Button>
            <Drawer
                {...args}
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                onCancel={() => setIsOpen(false)}
                onOk={() => setIsOpen(false)}
            >
                <div style={{ width: "500px" }}>
                    <h1>Basic Simple Drawer</h1>
                    <div>Contents</div>
                    <div>Contents</div>
                    <div>Contents</div>
                </div>
            </Drawer>
        </div>
    );
};
DrawerOpeningOnLeft.args = { hideFooter: false, openSide: "left" };
