
export interface FileUploaderScheme {
    selectedFiles: File[]
    inputReferenceData: any
}

export enum MimeTypes {
    "image/jpeg" = "image/jpeg",
    "image/png" = "image/png",
    "video/mp4" = "video/mp4"
}

export type FileMimeType = `${MimeTypes}`;

export interface FileUploaderElementProps {
    fileName: string
    mimeType: FileMimeType,
    fileSource: string
}

export type FileUploaderProps = FileUploaderElementProps[]

export const defaultMimeTypes = Object.values(MimeTypes);
export const defaultMimeTypesString = defaultMimeTypes.join(", ");