import React from "react";

import { ITagProps } from "../../models/ITagProps";

const Tag = (props: ITagProps) => {
    return (
        <div
            className={`p-1 text-center text-xs font-semibold ${
                props.rounded ? "rounded-full" : "rounded-md"
            } h-fit w-fit min-w-12 ${
                props.borderless ? "border-none" : "border-2"
            } ${
                props.bgColor
                    ? ""
                    : props.success
                    ? "bg-tags-bg-success"
                    : props.warning
                    ? "bg-tags-bg-warning"
                    : props.error
                    ? "bg-tags-bg-error"
                    : props.processing
                    ? "bg-tags-bg-processing"
                    : "bg-tags-bg"
            } ${
                props.borderColor
                    ? ""
                    : props.success
                    ? "border-tags-border-success"
                    : props.warning
                    ? "border-tags-border-warning"
                    : props.error
                    ? "border-tags-border-error"
                    : props.processing
                    ? "border-tags-border-processing"
                    : "border-tags-border"
            }  ${
                props.color
                    ? ""
                    : props.success
                    ? "text-tags-text-success"
                    : props.warning
                    ? "text-tags-text-warning"
                    : props.error
                    ? "text-tags-text-error"
                    : props.processing
                    ? "text-tags-text-processing"
                    : "text-tags-text"
            }`}
            style={{
                background: props.bgColor ? props.bgColor : undefined,
                borderColor: props.borderColor ? props.borderColor : undefined,
                color: props.color ? props.color : undefined,
            }}
        >
            <p
                style={{
                    color: props.color,
                }}
            >
                {props.text}
            </p>
        </div>
    );
};

export default Tag;
