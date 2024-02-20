import {DetailedHTMLProps, FC, LiHTMLAttributes} from "react";
import {Identifier} from "dnd-core";

interface UlProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    dataHandlerId?: Identifier | null
}

const Li: FC<UlProps> = ({
    children,
    className,
    dataHandlerId,
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