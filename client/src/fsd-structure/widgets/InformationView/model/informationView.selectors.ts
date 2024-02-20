import {StateScheme} from "@/store/stateScheme";

export const getPlayerId = (state: StateScheme) => state.informationView.playerData.id;
export const getPlayerName = (state: StateScheme) => state.informationView.playerData.name;
export const getXmlScheduleFile = (state: StateScheme) => state.informationView.playerData.xml;
export const getPlayerContent = (state: StateScheme) => state.informationView.playerData.content;
export const getInformationViewMode = (state: StateScheme) => state.informationView.mode;
export const getCurrentPlayerData= (state: StateScheme) => ({
    id: state.informationView.playerData.id,
    xml: state.informationView.playerData.xml,
    name: state.informationView.playerData.name,
    content: state.informationView.playerData.content
});
export const getStoreFiles = (state: StateScheme) => state.informationView.storeFiles;
export const getStoreFilesBuffer = (state: StateScheme) => state.informationView.storeFilesBuffer;
export const getPlayersList = (state: StateScheme) => state.informationView.playersList;