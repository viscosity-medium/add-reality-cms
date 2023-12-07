import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileTransferApiService} from "@/fsd-structure/shared";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

export const updateStoreFiles = createAsyncThunk(
    "file-uploader/update-files-chunks",
    async (storeFiles: StoreFileProps[]) => {

        const serverResponse: any = await fileTransferApiService.updateStoreFiles(storeFiles)

        return serverResponse.data;

    }
)