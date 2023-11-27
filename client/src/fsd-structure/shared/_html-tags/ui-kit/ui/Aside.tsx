import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface AsideProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Aside: FC<AsideProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <aside
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </aside>
    );
};

export default Aside;