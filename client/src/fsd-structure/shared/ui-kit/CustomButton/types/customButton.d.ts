import {ButtonProps} from "../../../_html-tags/ui-kit/ui/Button";

type CustomButtonWidth = "defaultWidth" | "fullWidth" | "bigWidth";
type StyleType = "default" | "colored" | "transparent";

export interface CustomButtonProps extends ButtonProps {
    customWidth: CustomButtonWidth
    styleType: StyleType
}