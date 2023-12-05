'use client';

import {useAppDispatch, useAppSelector} from "@/store/store";
import {ChangeEvent} from "react";
import {getDeviceId, getDeviceName, getXmlScheduleFile} from "../informationView.selectors";
import { informationViewActions } from "../informationView.slice";

const useFormInputs = () => {

    const dispatch = useAppDispatch();

    const deviceId = useAppSelector(getDeviceId);
    const deviceName = useAppSelector(getDeviceName);
    const xmlFile = useAppSelector(getXmlScheduleFile);

    const onIdInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        dispatch(informationViewActions.setId(inputValue));
    }
    const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        dispatch(informationViewActions.setFilename(inputValue));
    }
    const onXmlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        dispatch(informationViewActions.setXml(inputValue));
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