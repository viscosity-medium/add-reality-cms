import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {fileStoreReducer, FileStoreScheme} from "@/fsd-structure/widgets/FileStoreList/model/fileStore.slice";
import {fileUploaderReducer} from "@/fsd-structure/widgets/FileUploader/model/fileUploader.slice";
import {informationViewReducer} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
import {
    FileUploaderScheme,
    // fileUploaderReducer,
    InformationViewScheme,

} from "@/fsd-structure/widgets";

export interface StateScheme {
    fileUploader: FileUploaderScheme,
    informationView: InformationViewScheme,
    fileStore: FileStoreScheme
}

export const store = configureStore({
    reducer: {
        fileUploader: fileUploaderReducer,
        informationView: informationViewReducer,
        fileStore: fileStoreReducer
    },
    devTools: process.env.NODE_ENV === "development"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;