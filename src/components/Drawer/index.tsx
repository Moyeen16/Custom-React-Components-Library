import React, { useState } from "react";
import { IDrawerProps } from "../../models/IDrawerProps";
import { Close } from "@styled-icons/material-rounded/Close";
const Drawer = (props: IDrawerProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(props.isOpen);

    const handleClose = () => {
        setIsDrawerOpen(false);
        if (props.onClose) props.onClose();
    };

    const handleDrawerContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevents the click event from bubbling up to the parent (modal) div
    };

    React.useEffect(() => {
        setIsDrawerOpen(props.isOpen);
    }, [props.isOpen]);
    return (
        <div>
            <div
                className={`fixed inset-0 w-full z-40 bg-black transition-opacity ${
                    isDrawerOpen
                        ? "opacity-50 duration-300 ease-out max-w-full"
                        : "opacity-0 duration-300 ease-in max-w-0"
                }`}
                onClick={handleClose}
            ></div>
            <div
                className={`fixed inset-y-0 overflow-x-hidden ${
                    props.openSide === "left" ? "left-0" : "right-0"
                } z-50 bg-white shadow-xl ${
                    isDrawerOpen
                        ? `max-w-64 min-w-64 transition-max-w duration-200 ease-out`
                        : "max-w-0 min-w-0 transition-max-w duration-200 ease-in"
                }`}
                style={
                    isDrawerOpen
                        ? {
                              minWidth: props.width ?? "18rem",
                              maxWidth: props.width ?? "18rem",
                          }
                        : { minWidth: 0, maxWidth: 0 }
                }
            >
                <div
                    className={`flex ${
                        props.openSide === "left" ? "justify-end" : ""
                    } p-2 pb-0`}
                >
                    <Close
                        className="cursor-pointer text-modal-text"
                        size={24}
                        onClick={handleClose}
                    />
                </div>
                <div className="px-4 py-2 pt-0">{props.children}</div>
            </div>
        </div>
    );
};

export default Drawer;
