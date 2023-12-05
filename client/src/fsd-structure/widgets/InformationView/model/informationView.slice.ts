import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InformationViewScheme} from "@/fsd-structure/widgets";
import {Mode} from "@/fsd-structure/widgets/InformationView/types/InformationView";
import {fetchStoreFiles} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/informationView.asynkThunk";
import { StoreFileProps } from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {
    fileUploadFilesToServerByChunks
} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/fileUploader.asyncThunk";

const initialState: InformationViewScheme = {
    mode: "store",
    playerData: {
        id: "",
        filename: "",
        xml: ""
    },
    storeFiles: []
};

const informationViewSlice = createSlice({
    name: "informationView",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<Mode>) => { state.mode = action.payload },

        setId: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, id: action.payload}},
        setFilename: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, filename: action.payload}},
        setXml: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, xml: action.payload}},

        setFileStore: (state, action) => { state.storeFiles = action.payload }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStoreFiles.fulfilled, (state, action: any) => {
            const data: StoreFileProps[] = action.payload.media
            console.log(data)
            state.storeFiles = action.payload.media;
        })
        builder.addCase(fetchStoreFiles.rejected, (state, action) => {
            console.log(action.payload)
            console.log("shit")
        })

        builder.addCase(fileUploadFilesToServerByChunks.fulfilled, (state, action: any) => {
            state.storeFiles = action.payload
        })
    }
});

export const {
    reducer: informationViewReducer,
    actions: informationViewActions
} = informationViewSlice;
