import {DetailedHTMLProps, FC, FormHTMLAttributes} from "react";

interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const Form: FC<FormProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <form
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </form>
    );
};

export default Form