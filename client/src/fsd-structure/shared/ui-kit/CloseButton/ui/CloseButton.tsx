import cls from "./closeButton.module.scss";
import {Button, Hr, joinClassnames} from "@/fsd-structure/shared";
import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

export interface ButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: "small" | "normal" | "big"
}

const CloseButton: FC<ButtonProps> = ({
    className = "",
    onClick,
    size = "small",
    ...otherProps
}) => {

    const sizeClass = cls[size]

    return (
        <Button
            className={joinClassnames([className, cls.deleteButton, sizeClass])}
            onClick={onClick}
            {...otherProps}
        >
            <Hr className={joinClassnames([cls.h, cls.hr1])}/>
            <Hr className={joinClassnames([cls.h, cls.hr2])}/>
        </Button>
    );
};

export default CloseButton;