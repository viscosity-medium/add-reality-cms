import {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    children,
    className,
    type,
    onChange,
    ...otherInputProps
}, ref) => {

    return (
        <input
            ref={ref}
            type={type}
            className={className}
            onChange={onChange}
            {...otherInputProps}
        />
    );

});

Input.displayName="Input";

export default Input;