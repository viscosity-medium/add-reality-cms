import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Header: FC<HeaderProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <header
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </header>
    );
};

export default Header;