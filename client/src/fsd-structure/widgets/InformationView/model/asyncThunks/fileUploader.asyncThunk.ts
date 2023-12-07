import {createAsyncThunk} from "@reduxjs/toolkit";
import {uploadFilesToServerByChunks} from "../../../FileUploader/lib/processFileChunksFetches";
import {fileTransferApiService} from "@/fsd-structure/shared";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

export const uploadMultipleFilesByChunks = createAsyncThunk(
    "file-uploader/upload-files-chunks",
    async ({storeFiles, selectedFiles} : {storeFiles: StoreFileProps[], selectedFiles: File[]}) => {

        await fileTransferApiService.updateStoreFiles(storeFiles);

        const serverResponse = await uploadFilesToServerByChunks({
            files: selectedFiles
        });
        if(serverResponse?.data && typeof Array.isArray(serverResponse?.data)){
            return serverResponse.data;
        }

    }
)