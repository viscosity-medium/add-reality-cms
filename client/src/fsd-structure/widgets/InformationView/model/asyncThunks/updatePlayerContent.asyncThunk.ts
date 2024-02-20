import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileTransferApiService} from "@/fsd-structure/shared";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {PlayerDataProps} from "@/fsd-structure/widgets/InformationView/types/InformationView";

export const updatePlayerContent = createAsyncThunk(
    "file-transfer/update-player-content",
    async (playerData: PlayerDataProps) => {

        const serverResponse: any = await fileTransferApiService.updatePlayerContent(playerData)
        .then(res => res?.data);

        return serverResponse;

    }
)