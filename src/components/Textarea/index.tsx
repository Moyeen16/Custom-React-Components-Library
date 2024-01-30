import React from "react";
import { ITextAreaProps } from "../../models/ITextAreaProps";

const Textarea: React.FC<ITextAreaProps> = (props: ITextAreaProps) => {
  return (
    <div className="w-full flex items-top">
      {props.label && (
        <label className="text-sm font-medium text-input-label mr-1 mt-1">
          {props.label} :
        </label>
      )}
      <div className="relative">
        <div className={`min-w-64 max-w-full flex flex-1 relative`}>
          <textarea
            className={`w-full bg px-2 py-1 text-sm border-2 rounded-md outline-none ${
              props.validation?.error
                ? "border-input-error bg-input-error-bg"
                : "focus:border-formItems-focus-border focus-visible:border-formItems-focus-border focus:bg-formItems-focus-bg"
            }`}
            required={props.required}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            rows={props.rows ?? 4}
          />
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
export default Textarea;
