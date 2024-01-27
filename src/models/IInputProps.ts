export interface IInputProps {
    required? : boolean;
	label? : string;
    type? : 'text'|'number'|'email'|'password'|'phone';
    value? : string|number;
    defaultValue? : string|number;
    placeholder? : string;
    prefix? : JSX.Element;
    suffix? : JSX.Element;
    onChange? : (e:React.ChangeEvent<HTMLInputElement>)=>void;
    onBlur? : ()=>void;
    validation? : {
        error: boolean;
        message: string;
    }
}
