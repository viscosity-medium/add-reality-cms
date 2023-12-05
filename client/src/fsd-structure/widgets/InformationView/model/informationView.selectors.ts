import {StateScheme} from "@/store/store";

export const getDeviceId = (state: StateScheme) => state.informationView.playerData.id;
export const getDeviceName = (state: StateScheme) => state.informationView.playerData.filename;
export const getXmlScheduleFile = (state: StateScheme) => state.informationView.playerData.xml;
export const getInformationViewMode = (state: StateScheme) => state.informationView.mode