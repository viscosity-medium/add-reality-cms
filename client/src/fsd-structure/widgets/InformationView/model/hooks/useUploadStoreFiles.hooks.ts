'use client'

import {useAppDispatch, useAppSelector} from "@/store/store";
import {fileUploaderActions, getSelectedFiles} from "@/fsd-structure/widgets";
import {
    uploadMultipleFilesByChunks
} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/fileUploader.asyncThunk";
import {getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";

const useUploadNewStoreFiles = () => {

    const dispatch = useAppDispatch();
    const selectedFiles = useAppSelector(getSelectedFiles);
    const storeFiles = useAppSelector(getStoreFiles);

    const onUploadNewStoreFiles = () => {
        (async () => {
            await dispatch(uploadMultipleFilesByChunks({
                storeFiles,
                selectedFiles
            }));
            dispatch(fileUploaderActions.setSelectedFiles([]));
        })();
    };

    return {
        onUploadNewStoreFiles
    }
}

export default useUploadNewStoreFiles;