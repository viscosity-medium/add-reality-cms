import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

interface ButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <button
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </button>
    );
};

export default Button;