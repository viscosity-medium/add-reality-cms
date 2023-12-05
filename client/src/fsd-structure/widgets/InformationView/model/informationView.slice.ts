import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InformationViewScheme} from "@/fsd-structure/widgets";
import {Mode} from "@/fsd-structure/widgets/InformationView/types/InformationView";
import {fetchStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.asynkThunk";

const initialState: InformationViewScheme = {
    mode: "store",
    playerData: {
        id: "",
        filename: "",
        xml: ""
    },
    filesStore: []
};

const informationViewSlice = createSlice({
    name: "informationView",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<Mode>) => { state.mode = action.payload },

        setId: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, id: action.payload}},
        setFilename: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, filename: action.payload}},
        setXml: (state, action: PayloadAction<string>) => { state.playerData = {...state.playerData, xml: action.payload}},

        setFileStore: (state, action) => { state.filesStore = action.payload }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStoreFiles.fulfilled, (state, action) => {
            console.log("yep")
        })
        builder.addCase(fetchStoreFiles.rejected, (state, action) => {
            console.log("shit")
        })
    }
});

export const {
    reducer: informationViewReducer,
    actions: informationViewActions
} = informationViewSlice;
