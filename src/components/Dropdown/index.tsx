import React, { useEffect, useRef, useState } from "react";
import { IDropdownProps } from "../../models/IDropdownProps";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";
import styles from "./styles.module.css";
interface ISelectedValue {
    value: string | number;
    label: string;
}
const Dropdown = (props: IDropdownProps & React.HTMLProps<HTMLDivElement>) => {
    const { ...rest } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<ISelectedValue>();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const handleOptionClick = (option: ISelectedValue) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };
    const calculateOptionsHeight = () => {
        if (optionsRef.current) {
            const optionsRect = optionsRef.current.getBoundingClientRect();
            return optionsRect.height;
        }
        return 0;
    };
    const hasSpaceBelow = () => {
        if (dropdownRef.current) {
            const optionsHeight = calculateOptionsHeight();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            return dropdownRect.bottom + optionsHeight <= window.innerHeight;
        }
        return true;
    };
    const checkOptionPosition = () => {
        if (!hasSpaceBelow()) {
            // If there's not enough space below, open the dropdown upwards
            dropdownRef.current?.classList.add(styles["openUpwards"]);
        } else {
            dropdownRef.current?.classList.remove(styles["openUpwards"]);
        }
        // setIsOpen(!isOpen);
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const Options = (props: {
        options: ISelectedValue[];
        noMaxWidth?: boolean;
        handleOptionClick: (option: ISelectedValue) => void;
        checkOptionPosition: () => void;
    }) => {
        useEffect(() => {
            props.checkOptionPosition();
        }, []);
        return (
            <div
                className={`${
                    props.options.length > 0
                        ? `${styles.options} ${
                              props.noMaxWidth ? "" : "max-w-48"
                          } border rounded-md shadow-md`
                        : ""
                }`}
                ref={optionsRef}
            >
                {props.options.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => handleOptionClick(option)}
                        className={`cursor-pointer w-full px-4 py-2 rounded-md ${"hover:bg-menu-hover"} whitespace-nowrap overflow-hidden text-ellipsis`}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        );
    };
    return (
        <div
            className={`relative ${props.noMaxWidth ? "" : "max-w-48"} `}
            ref={dropdownRef}
            {...rest}
        >
            <div
                className={`flex items-center justify-between border-2 rounded-md ${
                    props.noMaxWidth ? "" : "max-w-48"
                } hover:bg-menu-hover cursor-pointer px-2 py-1 ${
                    isOpen ? "border-border-teal" : ""
                }`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {selectedOption
                        ? selectedOption.label
                        : props.placeholder
                        ? props.placeholder
                        : "Select"}
                </div>
                <div>
                    <AngleDown
                        size={12}
                        style={{
                            color: "#0f0f0f",
                            transform: isOpen ? "rotate(-180deg)" : "none",
                            transition: "transform 150ms ease",
                        }}
                    />
                </div>
            </div>
            {isOpen && (
                <Options
                    noMaxWidth={props.noMaxWidth}
                    options={props.options}
                    handleOptionClick={handleOptionClick}
                    checkOptionPosition={checkOptionPosition}
                />
            )}
        </div>
    );
};

export default Dropdown;
