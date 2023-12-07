import {StateScheme} from "@/store/stateScheme";

export const getNewDeviceName = (state: StateScheme) => state.newPlayer.name;
export const getNewDeviceId = (state: StateScheme) => state.newPlayer.id;
export const getNewXmlId = (state: StateScheme) => state.newPlayer.xml;
export const getNewPlayerData = (state: StateScheme) => ({
    id: state.newPlayer.id,
    name: state.newPlayer.name,
    xml: state.newPlayer.xml
});
