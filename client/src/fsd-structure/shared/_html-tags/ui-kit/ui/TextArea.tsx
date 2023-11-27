import {DetailedHTMLProps, FC, TextareaHTMLAttributes} from "react";

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const TextArea: FC<TextAreaProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <textarea
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </textarea>
    );
};

export default TextArea;