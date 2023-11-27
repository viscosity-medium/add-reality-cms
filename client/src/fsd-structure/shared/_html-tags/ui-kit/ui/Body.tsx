import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>{}

const Body: FC<BodyProps> = ({
    className,
    children,
    ...otherProps
}) => {
    return (
        <body
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </body>
    );
};

export default Body;