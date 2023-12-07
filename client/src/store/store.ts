import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {storeFilesReducer} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {fileUploaderReducer} from "@/fsd-structure/widgets/FileUploader/model/fileUploader.slice";
import {informationViewReducer} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
import {modalReducer} from "@/fsd-structure/widgets/Modal/model/modal.slice";
import {newPlayerReducer} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.slice";

export const store = configureStore({
    reducer: {
        fileUploader: fileUploaderReducer,
        informationView: informationViewReducer,
        fileStore: storeFilesReducer,
        modal: modalReducer,
        newPlayer: newPlayerReducer
    },
    devTools: process.env.NODE_ENV === "development"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;