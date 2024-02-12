export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    transparent?: boolean;
    alternate?: boolean;
    transition?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}
