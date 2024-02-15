import React from "react";
// import "./styles.css";
import { IProgressBarProps } from "../../models/IProgressBarProps";

const ProgressBar = (props: IProgressBarProps) => {
    const { completedPercent, bgColor } = props;

    return (
        <div className="flex items-center">
            <div
                className={`bar-container relative rounded-full ${
                    props.showPercentage
                        ? props.size === "large"
                            ? "h-8"
                            : props.size === "medium"
                            ? "h-5"
                            : props.size === "small"
                            ? "h-2"
                            : "h-5"
                        : props.size === "large"
                        ? "h-5"
                        : props.size === "medium"
                        ? "h-4"
                        : props.size === "small"
                        ? "h-2"
                        : "h-3"
                } w-full bg-progress-bg overflow-hidden`}
            >
                <div
                    className={`h-full transition-w ease-in-out duration-1000 ${
                        props.showSuccessColor && completedPercent === 100
                            ? "bg-progress-success"
                            : props.warning
                            ? "bg-progress-warning"
                            : props.failure
                            ? "bg-progress-failure"
                            : "bg-progress"
                    } `}
                    style={{
                        width: `${
                            completedPercent > 100 ? 100 : completedPercent
                        }%`,
                        backgroundColor: `${props.bgColor}`,
                    }}
                ></div>
                {props.showPercentage && props.size !== "small" && (
                    <div className="absolute m-auto left-0 right-0 top-0 bottom-0 bg-transparent text-white flex text-xs justify-center items-center">
                        {completedPercent > 100
                            ? 100
                            : Math.round(completedPercent * 100) / 100}
                        %
                    </div>
                )}
            </div>
            {props.size === "small" && props.showPercentage && (
                <div className="text-progress-text text-sm font-medium ml-2">
                    {completedPercent > 100
                        ? 100
                        : Math.round(completedPercent * 100) / 100}
                    %
                </div>
            )}
        </div>
    );
};

export default ProgressBar;
