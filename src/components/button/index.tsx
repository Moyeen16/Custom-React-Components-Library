import React from "react";
import { IButtonProps } from "../../models/IButtonProps";
import styles from "./style.module.css";
const Button = (props: IButtonProps) => {
  return (
    <button
      className={`min-w-16 border-2 rounded-md px-4 py-1 font-medium text-clip whitespace-nowrap ${
        props.transition
          ? props.primary
            ? styles["button-primary-transition"] +
              " text-button-primary border-button-primary-bg hover:border-button-primary-hover"
            : props.transparent
            ? styles["button-transparent-transition"] +
              " hover:border-button-transparent-hover"
            : props.alternate
            ? styles["button-alternate-transition"] +
              " text-button-alternate border-button-alternate-bg hover:border-button-alternate-hover"
            : ""
          : props.primary
          ? "bg-button-primary-bg border-button-primary-bg hover:bg-button-primary-hover hover:border-button-primary-hover text-button-primary "
          : props.transparent
          ? "hover:bg-button-transparent-hover"
          : props.alternate
          ? "bg-button-alternate-bg border-button-alternate-bg hover:bg-button-alternate-hover hover:border-button-alternate-hover text-button-alternate"
          : ""
      } `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
