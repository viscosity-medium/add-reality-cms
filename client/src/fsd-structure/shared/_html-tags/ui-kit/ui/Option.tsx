import {DetailedHTMLProps, FC, OptionHTMLAttributes} from "react";

interface OptionProps extends DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {}

const Option: FC<OptionProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <option
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </option>
    );
};

export default Option;