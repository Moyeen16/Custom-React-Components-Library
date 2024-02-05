export interface ICheckboxProps {
    id? : string;
    required? : boolean;
    disabled? : boolean;
	label? : string;
    checked? : boolean;
    defaultChecked? : boolean;
    onChange? : (e:React.ChangeEvent<HTMLInputElement>)=>void;
    onBlur? : ()=>void;
} 