import {fileTransferApiService, FileMetadata} from "@/fsd-structure/shared";
import { v4 as uuidv4 } from 'uuid';

interface UploadFiles {
    files: File[]
}

interface ProcessFileChunks {
    file: File
}

export const uploadFilesToServerByChunks = async ({
    files
}: UploadFiles) => {

    for await (const file of files) {
        await processFileChunksFetches({file});
    }

}

export const processFileChunksFetches = async ({
    file,
}: ProcessFileChunks) => {

    const id = uuidv4();
    const fileSize = file.size;
    const chunkSize = 5 * 1024 * 1024;
    const totalChunksAmount = Math.ceil(fileSize / chunkSize);
    let startPointer = 0;

    for ( let currentChunkIndex = 1; currentChunkIndex <= totalChunksAmount ;currentChunkIndex++ ) {

        await new Promise(async (resolve) => {

            let newStartPointer = startPointer+chunkSize;
            const chunk = file.slice(startPointer,newStartPointer);
            const { name, type, size } = file;
            const extension = type.replace(/^.*\//, "");

            const metadata: FileMetadata = {
                id, name, type, size, extension,
                currentChunkIndex, totalChunksAmount
            }
            startPointer = newStartPointer;

            await fileTransferApiService.uploadFileChunk({
                chunk,
                metadata
            });

            resolve("");

        });

    }

}