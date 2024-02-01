import React, { useState, useRef, useEffect } from "react";
import { ISwitchProps } from "../../models/ISwitchProps";
const Switch: React.FC<ISwitchProps> = (props: ISwitchProps) => {
  const [isChecked, setIsChecked] = useState(props.defaultChecked);
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRefChecked = useRef<HTMLSpanElement>(null);
  const labelRefNotChecked = useRef<HTMLSpanElement>(null);
  const toggleSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    props.onChange(newCheckedState);
  };

  const checkWidth = () => {
    if (
      labelRefChecked.current?.offsetWidth ||
      labelRefNotChecked.current?.offsetWidth
    ) {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      if (
        (labelRefChecked.current?.offsetWidth &&
          labelRefChecked.current?.offsetWidth > 20) ||
        (labelRefNotChecked.current?.offsetWidth &&
          labelRefNotChecked.current?.offsetWidth > 20)
      ) {
        const width =
          props.labelNonChecked || props.labelNonChecked
            ? ((labelRefChecked.current?.offsetWidth || 0) +
                (labelRefNotChecked.current?.offsetWidth || 0)) /
                rootFontSize +
              3
            : 3;
        setLabelWidth(width);
      } else setLabelWidth(3);

      // You can use labelWidth for any additional calculations or set it in state
    } else setLabelWidth(3);
  };
  useEffect(() => {
    checkWidth();
  }, [isChecked]);
  return (
    <button
      disabled={props.disabled}
      className={`relative inline-block h-6 rounded-full ${
        props.disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${
        isChecked
          ? `bg-formItems-checked-bg ${
              props.disabled
                ? "bg-formItems-disabled-checked-bg"
                : "hover:bg-formItems-hover-checked-bg"
            }`
          : `bg-gray-300 \ ${
              props.disabled
                ? "bg-formItems-disabled-non-checked-bg"
                : "hover:bg-formItems-hover-non-checked-bg"
            }`
      } transition-colors duration-300`}
      style={{
        width: labelWidth + "rem",
      }}
      onClick={toggleSwitch}
    >
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xs w-full px-2 ${
          isChecked ? "text-left" : "text-right"
        }`}
      >
        <span ref={labelRefChecked} className={isChecked ? "" : "hidden"}>
          {props.labelChecked}
        </span>
        <span ref={labelRefNotChecked} className={!isChecked ? "" : "hidden"}>
          {props.labelNonChecked}
        </span>
      </div>
      <div
        className={`absolute left-0 top-0 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isChecked
            ? `translate-x-full border-2 border-formItems-border`
            : `translate-x-0 border-2 border-gray-300`
        }`}
        style={
          isChecked ? { transform: `translateX(${labelWidth - 1.5}rem)` } : {}
        }
      />
    </button>
  );
};

export default Switch;
