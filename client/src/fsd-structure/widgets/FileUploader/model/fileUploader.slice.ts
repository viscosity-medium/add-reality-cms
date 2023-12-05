import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FileUploaderScheme } from "../types/fileUploader";

const initialState: FileUploaderScheme = {
    inputReferenceData: null,
    selectedFiles: []
}

const fileUploaderSlice = createSlice({

    name: "fileUploader",
    initialState,
    reducers: {
        setSelectedFiles: (state, action: PayloadAction<File[]>) => { state.selectedFiles = action.payload },
        setInputReference: (state, action) => { state.inputReferenceData = action.payload }
    }

});

export const {
    reducer: fileUploaderReducer,
    actions: fileUploaderActions
} = fileUploaderSlice;