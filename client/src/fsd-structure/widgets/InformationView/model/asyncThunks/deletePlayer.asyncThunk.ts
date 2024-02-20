import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileTransferApiService} from "@/fsd-structure/shared";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {PlayerDataProps} from "@/fsd-structure/widgets/InformationView/types/InformationView";

export const deletePlayer = createAsyncThunk(
    "file-transfer/delete-player",
    async (playerData: PlayerDataProps) => {

        const serverResponse: any = await fileTransferApiService.deletePlayer(playerData)
        .then(res => res?.data);

        return serverResponse;

    }
)