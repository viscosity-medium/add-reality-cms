import {fileTransferApiService, FileMetadata} from "@/fsd-structure/shared";
import { v4 as uuidv4 } from 'uuid';
import {AxiosResponse} from "axios";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

interface UploadFiles {
    files: File[]
}

interface ProcessFileChunks {
    file: File
}

export const uploadFilesToServerByChunks = async ({
    files
}: UploadFiles) => {

    for await (const [index, file] of files.entries()) {
        const response = await processFileChunksFetches({file});

        if(files.length === index + 1){
            return response;
        }
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
    let response: any = new Promise(async (externalResolve) => {

        for ( let currentChunkIndex = 1; currentChunkIndex <= totalChunksAmount ;currentChunkIndex++ ) {

            await new Promise(async (internalResolve) => {

                let newStartPointer = startPointer+chunkSize;
                const chunk = file.slice(startPointer,newStartPointer);
                const { name, type, size } = file;
                const extension = type.replace(/^.*\//, "");

                const metadata: FileMetadata = {
                    id, name, type, size, extension,
                    currentChunkIndex, totalChunksAmount
                }
                startPointer = newStartPointer;

                const serverResponse = await fileTransferApiService.uploadFileChunk({
                    chunk,
                    metadata
                });

                internalResolve(serverResponse);

                if(currentChunkIndex === totalChunksAmount){
                    console.log(serverResponse);
                    externalResolve(serverResponse);
                }

            });

        }

    })


    return response
}