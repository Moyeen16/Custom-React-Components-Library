export interface ITextAreaProps {
    required? : boolean;
	label? : string;
    value? : string|number;
    defaultValue? : string|number;
    placeholder? : string;
    rows? : number;
    onChange? : (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
    onBlur? : ()=>void;
    validation? : {
        error: boolean;
        message: string;
    }
}
