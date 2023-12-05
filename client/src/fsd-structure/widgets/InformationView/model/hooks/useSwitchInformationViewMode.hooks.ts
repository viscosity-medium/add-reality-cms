'use client'

import {useAppDispatch, useAppSelector} from "@/store/store";
import {getInformationViewMode} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import {Mode} from "@/fsd-structure/widgets/InformationView/types/InformationView";
import { informationViewActions } from "../informationView.slice";

const useSwitchInformationViewMode = () => {

    const dispatch = useAppDispatch();
    const informationViewMode = useAppSelector(getInformationViewMode);
    const oppositeModeToSwitch = informationViewMode === "player" ? "Хранилище": "Плеер";

    const onSetInformationViewMode = (argument: Mode) => {
        dispatch(informationViewActions.setMode(argument));
    }

    const onSwitchInformationViewMode = () => {
        if(informationViewMode === "store"){
            dispatch(informationViewActions.setMode("player"));
        } else if(informationViewMode === "player") {
            dispatch(informationViewActions.setMode("store"));
        }
    }

    return {
        informationViewMode,
        oppositeModeToSwitch,
        onSetInformationViewMode,
        onSwitchInformationViewMode,
    }

}

export default useSwitchInformationViewMode;