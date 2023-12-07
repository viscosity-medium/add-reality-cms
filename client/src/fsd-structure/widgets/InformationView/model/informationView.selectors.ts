import {StateScheme} from "@/store/stateScheme";

export const getDeviceId = (state: StateScheme) => state.informationView.playerData.id;
export const getDeviceName = (state: StateScheme) => state.informationView.playerData.name;
export const getXmlScheduleFile = (state: StateScheme) => state.informationView.playerData.xml;
export const getInformationViewMode = (state: StateScheme) => state.informationView.mode;
export const getStoreFiles = (state: StateScheme) => state.informationView.storeFiles;
export const getStoreFilesBuffer = (state: StateScheme) => state.informationView.storeFilesBuffer;
export const getPlayersList = (state: StateScheme) => state.informationView.playersList;