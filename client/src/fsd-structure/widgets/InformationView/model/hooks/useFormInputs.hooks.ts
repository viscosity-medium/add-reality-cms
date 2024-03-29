'use client';

import {useAppDispatch, useAppSelector} from "@/store/store";
import {ChangeEvent} from "react";
import {getPlayerId, getPlayerName, getXmlScheduleFile} from "../informationView.selectors";
import { informationViewActions } from "../informationView.slice";

const useFormInputs = () => {

    const dispatch = useAppDispatch();

    const deviceId = useAppSelector(getPlayerId);
    const deviceName = useAppSelector(getPlayerName);
    const xmlFile = useAppSelector(getXmlScheduleFile);

    const onIdInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        dispatch(informationViewActions.setCurrentPlayerId(inputValue));
    }
    const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        dispatch(informationViewActions.setCurrentPlayerName(inputValue));
    }
    const onXmlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        dispatch(informationViewActions.setCurrentXmlId(inputValue));
    }

    return {
        deviceId,
        deviceName,
        xmlFile,
        onIdInputChange,
        onNameInputChange,
        onXmlInputChange
    }
};


export default useFormInputs;