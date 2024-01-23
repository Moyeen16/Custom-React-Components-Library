export interface IButtonProps {
	primary?: boolean;
	transparent?: boolean;
	alternate?: boolean;
	transition?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}
