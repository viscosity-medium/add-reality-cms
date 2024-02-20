import { createSlice } from "@reduxjs/toolkit";

export interface StoreFileProps {
    id: string
    src: string
    previewSrc: string
    name: string
    type: string
    extension: string
}

export interface FileStoreScheme {
    items: StoreFileProps[]
}

const initialState: FileStoreScheme = {
    items: []
}

const storeFilesListSlice = createSlice({
    name: "fileStoreSlice",
    initialState,
    reducers: {
        setItems: (state, action) => { state.items = action.payload },
    }
});

export const {
    reducer: storeFilesReducer,
    actions: storeFilesActions
} = storeFilesListSlice;