import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface HProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

const H1: FC<HProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <h1
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </h1>
    );
};

const H2: FC<HProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <h2
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </h2>
    );
};
const H3: FC<HProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <h3
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </h3>
    );
};
const H4: FC<HProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <h4
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </h4>
    );
};
const H5: FC<HProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <h5
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </h5>
    );
};
const H6: FC<HProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <h6
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </h6>
    );
};

export {
    H1, H2, H3, H4, H5, H6,
    type HProps
};