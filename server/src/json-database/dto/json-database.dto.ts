export interface StoreFileProps {
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
    content: StoreFileProps[]
}


export interface JsonDatabase {
    media: StoreFileProps[]
    players: PlayerData[]
}

