import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

export type Mode = "store" | "player"
export interface PlayerData {
    id: string
    filename: string,
    xml: string,
}

export interface InformationViewScheme {
    mode: Mode
    playerData: PlayerData
    storeFiles: StoreFileProps[]
}