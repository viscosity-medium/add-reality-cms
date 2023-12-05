import Button from "../../../../_html-tags/ui-kit/ui/Button";
import {FC} from "react";
import {CustomButtonProps} from "../../types/customButton";
import {joinClassnames} from "@/fsd-structure/shared";
import cls from "./CustomButton.module.scss"

const CustomButton: FC<CustomButtonProps> = ({
    children,
    className = "",
    customWidth = "defaultWidth",
    styleType = "default",
    ...otherProps
}) => {

    const widthClass = cls[customWidth];
    const styleTypeClass = cls[styleType];
    const resultClasses = joinClassnames([cls.button, className, styleTypeClass, widthClass]);

    return (
        <Button
            className={resultClasses}
            {...otherProps}
        >
            {
                children
            }
        </Button>
    );

};

export default CustomButton;