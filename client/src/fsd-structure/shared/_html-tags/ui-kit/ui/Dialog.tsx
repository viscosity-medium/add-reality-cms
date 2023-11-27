import {DetailedHTMLProps, DialogHTMLAttributes, FC} from "react";

interface DialogProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {}

const Dialog: FC<DialogProps> = ({
    children,
    className,
    ...otherProps
}) => {
    return (
        <dialog
            className={className}
            {...otherProps}
        >
            {
                children
            }
        </dialog>
    );
};

export default Dialog;