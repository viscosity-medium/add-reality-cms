import {createAsyncThunk} from "@reduxjs/toolkit";
import {uploadFilesToServerByChunks} from "../../../FileUploader/lib/processFileChunksFetches";

export const fileUploadFilesToServerByChunks = createAsyncThunk(
    "file-uploader/upload-files-chunks",
    async (selectedFiles: File[]) => {
        const serverResponse = await uploadFilesToServerByChunks({
            files: selectedFiles
        });
        if(serverResponse?.data && typeof Array.isArray(serverResponse?.data)){
            return serverResponse.data;

        }

    }
)