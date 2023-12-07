export interface StoreFiles {
    id: string
    name: string
    src: string
    previewSrc: string
    type: string
    extension: string
}

export interface PlayerData {
    name: string
    id: string
    xml: string
}


export interface JsonDatabase {
    media: StoreFiles[]
    players: PlayerData[]
}

