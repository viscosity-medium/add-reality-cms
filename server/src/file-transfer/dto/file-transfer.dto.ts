export interface FileMetadata {
    id: string
    name: string
    type: string
    extension: string
    size: number
    src: string
    currentChunkIndex: number
    totalChunksAmount: number
}

export interface FileTransferDto {
    fileChunk: Buffer
    metadata: FileMetadata
}