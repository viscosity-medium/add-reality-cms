import {DetailedHTMLProps, FC, LabelHTMLAttributes} from "react";

export interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const Label: FC<LabelProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <label
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </label>
    );
};

export default Label;