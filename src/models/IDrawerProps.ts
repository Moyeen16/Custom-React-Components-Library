export interface IDrawerProps {
    isOpen: boolean;
    onClose?: () => void;
    children: JSX.Element;
    onOk?: () => void;
    onCancel?: () => void;
    hideFooter?: boolean;
    width?: number;
    openSide?: "left" | "right";
}
