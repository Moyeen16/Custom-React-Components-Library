export interface IButtonProps {
	primary?: boolean;
	transparent?: boolean;
	alternate?: boolean;
	transition?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}
