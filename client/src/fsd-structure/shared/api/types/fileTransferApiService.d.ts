export interface FileMetadata {
    id: string,
    name: string,
    type: string,
    extension: string,
    size: number,
    currentChunkIndex: number,
    totalChunksAmount: number

}

export interface UploadFileByChunks {
    chunk: Blob,
    metadata: FileMetadata
}