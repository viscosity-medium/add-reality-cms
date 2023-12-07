import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InformationViewScheme} from "@/fsd-structure/widgets";
import {Mode, PlayerData} from "@/fsd-structure/widgets/InformationView/types/InformationView";
import {fetchDatabaseData} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/informationView.asynkThunk";
import { StoreFileProps } from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {
    uploadMultipleFilesByChunks
} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/fileUploader.asyncThunk";
import {updateStoreFiles} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/updateStoreFiles.asyncThunk";

const initialState: InformationViewScheme = {
    mode: "store",
    playerData: {
        id: "",
        name: "",
        xml: ""
    },
    playersList: [],
    storeFilesBuffer: [],
    storeFiles: []
};

const informationViewSlice = createSlice({
    name: "informationView",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<Mode>) => { state.mode = action.payload },

        setCurrentPlayerId: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, id: action.payload}},
        setCurrentPlayerName: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, name: action.payload}},
        setCurrentXmlId: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, xml: action.payload}},
        
        setFileStore: (state, action) => { state.storeFiles = action.payload },
        setPlayersList: (state, action: PayloadAction<PlayerData[]>) => { state.playersList = action.payload }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDatabaseData.fulfilled, (state, action: any) => {
            const storeFiles: StoreFileProps[] = action.payload.media;
            const playersList = action.payload.players;
            state.storeFiles = storeFiles;
            state.storeFilesBuffer = storeFiles;
            state.playersList = playersList;
        })
        builder.addCase(fetchDatabaseData.rejected, (state, action) => {
            console.log(action.payload)
        })

        builder.addCase(uploadMultipleFilesByChunks.fulfilled, (state, action: any) => {
            const storeFiles: StoreFileProps[] = action.payload
            state.storeFiles = storeFiles;
            state.storeFilesBuffer = storeFiles;
        })

        builder.addCase(updateStoreFiles.fulfilled, (state, action: any) => {
            const storeFiles: StoreFileProps[] = action.payload
            state.storeFiles = storeFiles;
            state.storeFilesBuffer = storeFiles;
        })
    }
});

export const {
    reducer: informationViewReducer,
    actions: informationViewActions
} = informationViewSlice;
