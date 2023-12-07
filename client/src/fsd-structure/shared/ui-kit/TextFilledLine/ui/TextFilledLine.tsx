import {Paragraph, ParagraphProps} from "@/fsd-structure/shared";
import cls from "./textFilledLine.module.scss";
import {FC} from "react";

const TextFilledLine: FC<ParagraphProps> = ({
    children,
    className,
    ...otherProps
}) => {

    return (
        <Paragraph
            className={cls.textLine}
            {...otherProps}
        >
            {
                children
            }
        </Paragraph>
    );

};

export default TextFilledLine;