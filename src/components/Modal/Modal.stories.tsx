import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IModalProps } from "../../models/IModalPops";
import Modal from "./index";
import Button from "../Button";
const meta = {
    title: "Modal",
    component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const SimpleModal = (args: IModalProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Button primary onClick={() => setIsOpen(true)}>
                Open Modal
            </Button>
            <Modal
                {...args}
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                onCancel={() => setIsOpen(false)}
                onOk={() => setIsOpen(false)}
            >
                <div style={{ width: "500px" }}>
                    <h1>Basic Simple Modal</h1>
                    <div>Contents</div>
                    <div>Contents</div>
                    <div>Contents</div>
                </div>
            </Modal>
        </div>
    );
};
SimpleModal.args = { hideFooter: false };
