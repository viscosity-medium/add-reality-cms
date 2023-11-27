import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface UlProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

const Ul: FC<UlProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <ul
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </ul>
    );
};

export default Ul;