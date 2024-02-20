import {CustomHeaderProps} from "../types/CustomHeader.d";
import {H1, H2, H3, H4, H5, H6, joinClassnames} from "@/fsd-structure/shared";
import cls from "../ui/customHeader.module.scss"

export const defineHeaderTag = ({
    tag,
    children,
    isColored,
    className = "",
    ...otherProps
}: CustomHeaderProps) => {

    const coloredTextClass = isColored ? cls.isColored : cls.isWhite;

    switch (tag){
        case "h1":
            return <H1
                className={
                    joinClassnames(
                        [ className, coloredTextClass, cls.h, cls.h1 ]
                    )
                }
                {...otherProps}
            >
                { children }
            </H1>
        case "h2":
            return <H2
                className={
                    joinClassnames(
                        [ className,coloredTextClass, cls.h, cls.h2 ]
                    )
                }
                {...otherProps}
            >
                { children }
            </H2>
        case "h3":
            return <H3
                className={
                    joinClassnames(
                        [ className,coloredTextClass, cls.h, cls.h3 ]
                    )
                }
                {...otherProps}
            >
                { children }
            </H3>
        case "h4":
            return <H4
                className={
                    joinClassnames(
                        [ className,coloredTextClass, cls.h, cls.h4 ]
                    )
                }
                {...otherProps}
            >
                { children }
            </H4>
        case "h5":
            return <H5
                className={
                    joinClassnames(
                        [ className,coloredTextClass, cls.h, cls.h5 ]
                    )
                }
                {...otherProps}
            >
                { children }
            </H5>
        case "h6":
            return <H6
                className={
                    joinClassnames(
                        [ className,coloredTextClass, cls.h, cls.h6 ]
                    )
                }
                {...otherProps}
            >
                { children }</H6>
    }
}




