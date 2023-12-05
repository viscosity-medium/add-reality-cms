import { FC } from "react";
import { CustomHeaderProps } from "../types/CustomHeader.d";
import { defineHeaderTag } from "@/fsd-structure/shared/ui-kit/CustomHeader/lib/defineHeaderTag";

const CustomHeader: FC<CustomHeaderProps> = ({
    tag,
    children,
    isColored,
    ...otherProps
}) => {

    const customHeader = defineHeaderTag({
        tag,
        children,
        isColored,
        ...otherProps
    })

    return (
        <>
            {
                customHeader
            }
        </>
    );
};

export { CustomHeader }