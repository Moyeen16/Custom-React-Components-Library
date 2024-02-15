export interface IProgressBarProps {
    bgColor?: string;
    completedPercent: number;
    showPercentage?: boolean;
    showSuccessColor?: boolean;
    warning?: boolean;
    failure?: boolean;
    size?: "small" | "medium" | "large";
}
