export interface IDropdownProps {
    id?: string;
    required?: boolean;
    disabled?: boolean;
    label?: string;
    value?: string | number;
    defaultValue?: string | number;
    options: { value: string | number; label: string }[];
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    validation?: {
        error: boolean;
        message: string;
    };
    allowClear?: boolean;
    clearIcon?: JSX.Element;
    noMaxWidth?: boolean;
    responsive?: boolean;
}
