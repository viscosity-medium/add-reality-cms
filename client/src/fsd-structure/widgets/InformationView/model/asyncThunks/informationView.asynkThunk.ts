import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileTransferApiService} from "@/fsd-structure/shared";

export const fetchDatabaseData = createAsyncThunk(
    'files-transfer/fetch-database-data',
    async () => {
        const serverResponse = await fileTransferApiService.getDatabaseData()
        .then(res => res?.data);

        return serverResponse;
    }
)