import {Div, joinClassnames} from "@/fsd-structure/shared";
import {FC, ReactNode} from "react";
import cls from "./CardWrapper.module.scss";

interface CardWrapperProps {
    children: ReactNode,
    className?: string
}

const CardWrapper: FC<CardWrapperProps> = ({
    children,
    className=""
}) => {
    return (
        <Div
            className={joinClassnames([cls.scheduleInformationWrapper, className])}
        >
            {
                children
            }
        </Div>
    );
};

export default CardWrapper;