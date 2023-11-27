import {DetailedHTMLProps, FC, SelectHTMLAttributes} from "react";

interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

const Select: FC<SelectProps> = ({
    children,
    className,
    ...otherProps
}) => {

    return (
        <select
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </select>
    );

};

export default Select;