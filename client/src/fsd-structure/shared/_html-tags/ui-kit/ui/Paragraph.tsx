import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

export interface ParagraphProps extends  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const Paragraph: FC<ParagraphProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <p
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </p>
    );
};

export default Paragraph;