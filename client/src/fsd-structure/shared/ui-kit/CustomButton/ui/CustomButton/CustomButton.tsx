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
    disabled,
    ...otherProps
}) => {

    const widthClass = cls[customWidth];
    const styleTypeClass = cls[styleType];
    const isDisabled = disabled ? cls.isDisabled : ""
    const resultClasses = joinClassnames([cls.button, className, styleTypeClass, widthClass, isDisabled]);

    return (
        <Button
            className={resultClasses}
            disabled={disabled}
            {...otherProps}
        >
            {
                children
            }
        </Button>
    );

};

export default CustomButton;