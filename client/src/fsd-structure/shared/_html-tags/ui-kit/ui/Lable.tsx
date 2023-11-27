import {DetailedHTMLProps, FC, LabelHTMLAttributes} from "react";

interface UlProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const Label: FC<UlProps> = ({
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