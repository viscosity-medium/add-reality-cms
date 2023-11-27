import {DetailedHTMLProps, FC, HtmlHTMLAttributes} from "react";

interface HtmlProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>{}

const Html: FC<HtmlProps> = ({
    className,
    children,
    ...otherProps
}) => {
    return (
        <html
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </html>
    );
};

export default Html;