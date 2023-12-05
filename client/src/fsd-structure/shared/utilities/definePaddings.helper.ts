import joinClassnames from "./joinClassnames.helper";
import { Paddings } from "../types/paddings";
import cls from "../styles/margins.module.scss";

const definePaddings = ({
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    padding
}: Paddings) => {

    const pT = paddingTop ? cls[paddingTop] : "";
    const pB = paddingBottom ? cls[paddingBottom] : "";
    const pL = paddingLeft ? cls[paddingLeft] : "";
    const pR = paddingRight ? cls[paddingRight] : "";
    const p = padding ? cls[padding] : "";

    return joinClassnames([pT, pB, pL, pR, p]);

}

export default definePaddings;