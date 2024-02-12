import React, { useState } from "react";
import { IModalProps } from "../../models/IModalPops";
import { Close } from "@styled-icons/material-rounded/Close";
import Button from "../Button";
const Modal = (props: IModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(props.isOpen);

    const handleClose = () => {
        setIsModalOpen(false);
        if (props.onClose) props.onClose();
    };

    const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevents the click event from bubbling up to the parent (modal) div
    };

    React.useEffect(() => {
        setIsModalOpen(props.isOpen);
    }, [props.isOpen]);

    return isModalOpen ? (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-modal-bg"
            onClick={handleClose}
        >
            <div
                className="bg-white rounded-md p-6 min-w-72 "
                onClick={handleModalContentClick}
            >
                <div className="flex justify-end">
                    <Close
                        className="cursor-pointer text-modal-text"
                        size={24}
                        onClick={handleClose}
                    />
                </div>
                <div className="">{props.children}</div>
                {!props.hideFooter && (
                    <div className="flex justify-end">
                        <Button
                            transparent
                            className="mr-2"
                            onClick={props.onCancel}
                        >
                            Cancel
                        </Button>
                        <Button primary transition onClick={props.onOk}>
                            OK
                        </Button>
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default Modal;
