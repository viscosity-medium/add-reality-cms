'use client'

import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

export interface ButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button: FC<ButtonProps> = ({
    children,
    className,
    type,
    onClick,
    ...otherProps
}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={(event) => {
                event.preventDefault();
                onClick?.(event);
            }}
            {...otherProps}
        >
            {
                children
            }
        </button>
    );
};

export default Button;