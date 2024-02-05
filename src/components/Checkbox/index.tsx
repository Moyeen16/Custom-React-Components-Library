import React from "react";
import { ICheckboxProps } from "../../models/ICheckboxProps";
import styles from "./style.module.css";

const Checkbox: React.FC<ICheckboxProps> = (props: ICheckboxProps) => {
  const [checked, setChecked] = React.useState(props.defaultChecked || false);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  return (
    <div
      className={`${
        styles["checkbox-container"]
      } flex items-center justify-center ${
        isMouseDown && !props.disabled ? styles["pressed"] : ""
      }`}
      onMouseDown={() => {
        setIsMouseDown((prev) => !prev);
      }}
      onMouseUp={() => {
        setIsMouseDown((prev) => !prev);
      }}
    >
      <input
        id={props.id || "Chk1"}
        type="checkbox"
        checked={typeof props.checked === "boolean" ? props.checked : checked}
        onChange={(e) => {
          console.log("Changing");
          setChecked((prev) => !prev);
          if (props.onChange) props.onChange(e);
        }}
        className=""
        disabled={props.disabled}
        required={props.required}
        onBlur={props.onBlur}
      />
      <label
        className="cursor-pointer flex items-center text-sm font-medium text-input-label"
        htmlFor={props.id || "Chk1"}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
