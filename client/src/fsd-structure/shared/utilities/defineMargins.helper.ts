import joinClassnames from "./joinClassnames.helper";
import { Margins } from "../types/margins";
import cls from "../styles/margins.module.scss";

const defineMargins = ({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    margin
}: Margins) => {

    const mT = marginTop ? cls[marginTop] : "";
    const mB = marginBottom ? cls[marginBottom] : "";
    const mL = marginLeft ? cls[marginLeft] : "";
    const mR = marginRight ? cls[marginRight] : "";
    const m = margin ? cls[margin] : "";

    return joinClassnames([mT, mB, mL, mR, m]);

}

export default defineMargins;