import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface DivProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Div: FC<DivProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <div
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </div>
    );
};

export default Div;