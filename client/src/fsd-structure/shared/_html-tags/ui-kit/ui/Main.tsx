import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface MainProps extends  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Main: FC<MainProps> = ({
    children,
    className,
    ...otherProps
}) => {
    console.log(process.env.NEXT_PUBLIC_SERVER_HOST)
    return (
        <main
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </main>
    );
};

export default Main;