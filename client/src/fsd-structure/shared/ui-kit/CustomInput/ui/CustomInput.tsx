import {FC} from "react";
import {Input, InputProps, joinClassnames} from "@/fsd-structure/shared";
import cls from "./CustomInput.module.scss"

interface CustomInputProps extends InputProps {}

const CustomInput: FC<CustomInputProps> = ({
    className = "",
    ...otherProps
}) => {
    return (
        // @ts-ignore
        <Input
            className={joinClassnames([cls.input, className])}
            {...otherProps}
        />
    );
};

export default CustomInput;