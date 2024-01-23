export interface IMenuItemsProps {
	label: string;
	menuItems: IMenuItemsProps[];
	onClick?: () => void;
}
