export interface ISwitchProps {
    onChange: (isChecked: boolean) => void;
    defaultChecked ?: boolean;
    disabled ?: boolean;
    labelChecked ?: string;
    labelNonChecked ?: string
  }