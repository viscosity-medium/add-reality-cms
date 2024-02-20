import { createAsyncThunk } from "@reduxjs/toolkit";
import { fileTransferApiService } from "@/fsd-structure/shared";
import { PlayerDataProps } from "@/fsd-structure/widgets/InformationView/types/InformationView";

export const fetchCreateNewPlayer = createAsyncThunk(
    "new-player-card/create-new-player",
    async (playerData: PlayerDataProps) => {

        const serverResponse = await fileTransferApiService.registerNewPlayer(playerData)
        .then(res => res?.data);

        return serverResponse;

    }
)