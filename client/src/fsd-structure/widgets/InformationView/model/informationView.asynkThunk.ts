import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileTransferApiService} from "@/fsd-structure/shared";

export const fetchStoreFiles = createAsyncThunk(
    'files-transfer/fetchStoreFiles',
    async () => {
        await fileTransferApiService.getStoreFiles();
        //
        // return results;
    }
)