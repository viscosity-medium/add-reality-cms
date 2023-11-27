import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface NavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Nav: FC<NavProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <nav
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </nav>
    );
};

export default Nav;