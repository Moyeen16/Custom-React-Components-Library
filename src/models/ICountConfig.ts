export interface ICountConfig {
    // Max character count. Different from the native `maxLength`, it will be marked warning but not truncated
    max?: number;
    // Custom character count, for example, the standard emoji length is greater than 1, you can customize the counting strategy to change it to 1
    strategy?: (value: string) => number;
    // Same as `showCount`
    show?: boolean | ((args: { value: string; count: number; maxLength?: number }) => JSX.Element);
    // Custom clipping logic when the number of characters exceeds `count.max`, no clipping when not configured
    exceedFormatter?: (value: string, config: { max: number }) => string;
  }