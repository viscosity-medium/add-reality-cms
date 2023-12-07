import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewPlayerCardScheme} from "../types/newPlayerCard.types";
import {fetchCreateNewPlayer} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.asynkThunks";

const initialState: NewPlayerCardScheme = {
    name: "",
    id: "",
    xml: "",
}

const newPlayerSlice = createSlice({

    name: "fileUploader",
    initialState,
    reducers: {
        setDeviceName: (state, action: PayloadAction<string>) => { state.name = action.payload },
        setDeviceId: (state, action: PayloadAction<string>) => { state.id = action.payload },
        setXmlFileId: (state, action: PayloadAction<string>) => { state.xml = action.payload },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCreateNewPlayer.fulfilled, (state, action: any) => {

        })
    }

});

export const {
    reducer: newPlayerReducer,
    actions: newPlayerActions
} = newPlayerSlice;