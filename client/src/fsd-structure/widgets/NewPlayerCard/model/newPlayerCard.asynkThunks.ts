import { createAsyncThunk } from "@reduxjs/toolkit";
import { fileTransferApiService } from "@/fsd-structure/shared";
import { PlayerData } from "@/fsd-structure/widgets/InformationView/types/InformationView";

export const fetchCreateNewPlayer = createAsyncThunk(
    "new-player-card/create-new-player",
    async (playerData: PlayerData) => {

        const serverResponse = await fileTransferApiService.registerNewPlayer(playerData)
        .then(res => res?.data);

        return serverResponse;

    }
)