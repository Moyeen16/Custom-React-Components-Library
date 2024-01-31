import React from "react";
import { IAvatarProps } from "../../models/IAvatarProps";

const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => {
  const defaultProps: Partial<IAvatarProps> = {
    shape: "circle",
    size: "default",
  };
  const mergedProps = { ...defaultProps, ...props };
  return (
    <div>
      <div
        className={`bg-gray-300 text-white ${
          mergedProps.size === "default"
            ? "w-10 h-10"
            : mergedProps.size === "small"
            ? "w-8 h-8"
            : mergedProps.size === "large"
            ? "w-14 h-14"
            : ""
        } ${mergedProps.shape === "square" ? "rounded-md" : "rounded-full"}
		`}
        style={
          typeof mergedProps.size === "number"
            ? {
                width: String(mergedProps.size) + "px",
                height: String(mergedProps.size) + "px",
                ...props.style,
              }
            : { ...props.style }
        }
      >
        {mergedProps.src ? (
          <img
            className={`border-4 border-border-teal ${
              mergedProps.shape === "square" ? "rounded-md" : "rounded-full"
            } 
	  			`}
            src={mergedProps.src}
            alt={mergedProps.alt}
          />
        ) : mergedProps.icon ? (
          <div
            className={`flex items-center justify-center w-full h-full overflow-hidden border-4 border-border-teal ${
              mergedProps.shape === "square" ? "rounded-md" : "rounded-full"
            }`}
          >
            {props.icon}
          </div>
        ) : (
          <div
            className={`flex items-center justify-center w-full h-full overflow-hidden border-4 border-border-teal ${
              mergedProps.shape === "square" ? "rounded-md" : "rounded-full"
            }`}
          >
            <div
              className={
                props.size === "small"
                  ? "text-xs font-normal"
                  : "text-base font-normal"
              }
            >
              {props.children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Avatar;
