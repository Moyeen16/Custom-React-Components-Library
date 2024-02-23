import React from "react";
import { useState } from "react";
import { IInputProps } from "../../models/IInputProps";
import { Clear } from "@styled-icons/material-rounded/Clear";
import { Show } from "@styled-icons/boxicons-regular/Show";
import { Hide } from "@styled-icons/boxicons-regular/Hide";
const Input: React.FC<IInputProps> = (props: IInputProps) => {
    const [focus, setFocus] = useState(false);
    const isString = (value: JSX.Element | string) => {
        console.log(value, typeof value === "string");
        return typeof value === "string";
    };
    const handleClear = () => {
        const syntheticEvent = {
            target: {
                value: "",
            },
        };
        const typedSyntheticEvent =
            syntheticEvent as React.ChangeEvent<HTMLInputElement>;
        props.onChange && props.onChange(typedSyntheticEvent);
    };
    return (
        <div className="w-full flex items-center">
            {props.label && (
                <label className="text-sm font-medium text-input-label mr-1">
                    {props.label} :
                </label>
            )}
            <div className="relative">
                <div
                    className={`min-w-32 max-w-full flex flex-1 border-2 rounded-md relative
                ${
                    props.validation?.error
                        ? "border-input-error bg-input-error-bg"
                        : focus
                        ? "border-input-focus-border bg-input-focus-bg"
                        : ""
                }
                `}
                >
                    {props.prefix && (
                        <span
                            className={`px-2 py-1 text-sm text-input-prefix ${
                                isString(props.prefix)
                                    ? "bg-input-prefix-bg"
                                    : ""
                            } border-none rounded-md rounded-r-none`}
                        >
                            {props.prefix}
                        </span>
                    )}
                    <input
                        className={`flex-1 bg px-2 py-1 text-sm border-none outline-none bg-transparent`}
                        required={props.required}
                        type={
                            props.type === "password" &&
                            props.visibilityToggle?.visible
                                ? "text"
                                : props.type
                        }
                        defaultValue={props.defaultValue}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        onFocus={() => setFocus(true)}
                        onBlur={() => {
                            props.onBlur && props.onBlur();
                            setFocus(false);
                        }}
                        maxLength={props.maxLength}
                    />
                    {props.showCount && props.type === "text" && (
                        <span className="m-auto text-xs text-gray-300 mr-1">
                            {props.countFormatter
                                ? props.countFormatter(
                                      String(props.value).length
                                  )
                                : `${String(props.value).length}${
                                      props.maxLength
                                          ? "/" + props.maxLength
                                          : ""
                                  }`}
                        </span>
                    )}
                    {props.allowClear && (
                        <div
                            className="mr-1 cursor-pointer text-gray-300 hover:text-input-suffix h-0"
                            onClick={() => handleClear()}
                        >
                            {props.clearIcon || (
                                <Clear size={16} className="m-auto" />
                            )}
                        </div>
                    )}
                    {props.type === "password" &&
                        props.visibilityToggle?.onVisibleChange && (
                            <span
                                className="mr-1 cursor-pointer text-gray-300 hover:text-input-suffix h-0"
                                onClick={() => {
                                    if (props.visibilityToggle?.onVisibleChange)
                                        props.visibilityToggle.onVisibleChange(
                                            !props.visibilityToggle.visible
                                        );
                                }}
                            >
                                {props.visibilityToggle?.visible ? (
                                    <Hide size={16} />
                                ) : (
                                    <Show size={16} />
                                )}
                            </span>
                        )}
                    {props.suffix && (
                        <span
                            className={`px-2 py-1 text-sm text-input-suffix ${
                                isString(props.suffix)
                                    ? "bg-input-suffix-bg"
                                    : ""
                            } border-none rounded-md rounded-l-none`}
                        >
                            {props.suffix}
                        </span>
                    )}
                </div>
                {props.validation?.error && (
                    <div className="absolute left-0 mt-1 text-xs text-input-error italic">
                        {props.validation.message}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Input;
