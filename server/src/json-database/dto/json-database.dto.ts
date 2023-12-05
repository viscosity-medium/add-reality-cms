export interface MediaItem {
    id: string
    name: string
    src: string
    type: string
    extension: string
}

export interface JsonDatabase {
    media: MediaItem[]
}

