import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ModalScheme} from "@/fsd-structure/widgets/Modal/types/modal";

const initialState: ModalScheme = {
    isShown: false
}

const modalSlice = createSlice({

    name: "fileUploader",
    initialState,
    reducers: {
        setIsShown: (state, action: PayloadAction<boolean>) => { state.isShown = action.payload },
    }

});

export const {
    reducer: modalReducer,
    actions: modalActions
} = modalSlice;