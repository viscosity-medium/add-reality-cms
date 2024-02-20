import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

export type Mode = "store" | "player"
export interface PlayerDataProps {
    id: string
    name: string,
    xml: string,
    content: StoreFileProps[]
}

export interface InformationViewScheme {
    mode: Mode
    playerData: PlayerDataProps
    playersList: PlayerDataProps[]
    playerSchedule: StoreFileProps
    storeFilesBuffer: StoreFileProps[]
    storeFiles: StoreFileProps[]
}