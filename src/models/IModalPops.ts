export interface IModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: JSX.Element;
    onOk?: () => void;
    onCancel?: () => void;
    hideFooter?: boolean;
}
