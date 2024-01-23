import { IMenuItemsProps } from "./IMenuItemsProps";

export interface IMenuItems {
	label: string;
	menuItems: IMenuItemsProps[];
	onClick?: () => void;
	handleClick: (label: string) => void;
}
