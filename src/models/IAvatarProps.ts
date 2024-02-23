import { CSSProperties } from "react";
export interface IAvatarProps {
    alt?: string;
    icon?: JSX.Element;
    shape?: "circle" | "square";
    size?: number | "large" | "small" | "default";
    src?: string;
    style?: CSSProperties;
    children?: string | number | JSX.Element;
}
