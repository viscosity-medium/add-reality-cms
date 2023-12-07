import {joinClassnames, Label, LabelProps} from "@/fsd-structure/shared";
import {FC} from "react";
import cls from "./customLabel.module.scss"

const CustomLabel: FC<LabelProps> = ({
    className="",
    ...otherProps
}) => {
    return (
        <Label
            className={joinClassnames([cls.label, className])}
            {...otherProps}
        />
    );
};

export default CustomLabel;