import {createSlice} from "@reduxjs/toolkit";

export interface FileStoreItem {
    id: string
    src: string
    name: string
    type: string
    extension: string
}

export interface FileStoreScheme {
    items: FileStoreItem[]
}

const initialState: FileStoreScheme = {
    items: [
        {
            id: "",
            src: "",
            name: "",
            extension: "",
            type: ""
        }, {
            id: "",
            src: "",
            name: "",
            extension: "",
            type: ""
        }, {
            id: "",
            src: "",
            name: "",
            extension: "",
            type: ""
        }
    ]
}

const fileStoreSlice = createSlice({
    name: "fileStoreSlice",
    initialState,
    reducers: {
        setItems: (state, action) => { state.items = action.payload },
    }
});

export const {
    reducer: fileStoreReducer,
    actions: fileStoreActions
} = fileStoreSlice