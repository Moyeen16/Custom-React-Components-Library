import { ICountConfig } from "./ICountConfig";

export interface IInputProps {
    id?: number | string;
    required?: boolean;
    disabled?: boolean;
    label?: string;
    type?: "text" | "number" | "email" | "password" | "phone";
    value?: string | number;
    defaultValue?: string | number;
    placeholder?: string;
    prefix?: JSX.Element | string;
    suffix?: JSX.Element | string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    validation?: {
        error: boolean;
        message: string;
    };
    allowClear?: boolean;
    clearIcon?: JSX.Element;
    count?: ICountConfig;
    maxLength?: number;
    showCount?: boolean;
    countFormatter?: (count: number) => JSX.Element;
    visibilityToggle?: {
        visible?: boolean;
        onVisibleChange?: (visible: boolean) => void;
    };
}
