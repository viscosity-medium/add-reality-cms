export type Mode = "store" | "player"
export interface PlayerData {
    id: string
    filename: string,
    xml: string,
}

export interface InformationViewScheme {
    mode: Mode
    playerData: PlayerData
    filesStore: any[]
}