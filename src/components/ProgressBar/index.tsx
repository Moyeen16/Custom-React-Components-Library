import React from "react";
// import "./styles.css";
import { IProgressBarProps } from "../../models/IProgressBarProps";

const ProgressBar = (props: IProgressBarProps) => {
    const { completedPercent, bgColor } = props;

    return (
        <div className="bar-container relative rounded-full h-5 w-full bg-progress-bg overflow-hidden">
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
            <div className="absolute m-auto left-0 right-0 top-0 bottom-0 bg-transparent text-white flex text-xs justify-center items-center">
                {completedPercent > 100
                    ? 100
                    : Math.round(completedPercent * 100) / 100}
                %
            </div>
        </div>
    );
};

export default ProgressBar;
