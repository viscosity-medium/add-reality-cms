import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Section: FC<SectionProps> = ({
    children,
    className,
    ...otherProps
}) => {

    return (
        <section
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </section>
    );

};

export default Section;