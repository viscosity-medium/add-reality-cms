import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileTransferApiService} from "@/fsd-structure/shared";

export const fetchStoreFiles = createAsyncThunk(
    'files-transfer/fetchStoreFiles',
    async () => {
        const serverResponse = await fileTransferApiService.getStoreFiles()
        .then(res => res?.data);

        return serverResponse;
    }
)