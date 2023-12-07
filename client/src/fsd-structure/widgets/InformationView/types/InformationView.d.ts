import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

export type Mode = "store" | "player"
export interface PlayerData {
    id: string
    name: string,
    xml: string,
}

export interface InformationViewScheme {
    mode: Mode
    playerData: PlayerData
    playersList: PlayerData[],
    storeFilesBuffer: StoreFileProps[]
    storeFiles: StoreFileProps[]
}