import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface HrProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

const Hr: FC<HrProps> = ({
    className,
    ...otherHrProps
}) => {

    return (
        <hr
            className={className}
            {...otherHrProps}
        />
    );

};

export default Hr;