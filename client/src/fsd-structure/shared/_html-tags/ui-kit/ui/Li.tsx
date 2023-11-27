import {DetailedHTMLProps, FC, LiHTMLAttributes} from "react";

interface UlProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {}

const Li: FC<UlProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <li
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </li>
    );
};

export default Li;