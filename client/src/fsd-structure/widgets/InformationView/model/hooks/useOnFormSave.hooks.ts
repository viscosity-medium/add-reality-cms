'use client'

import {useAppDispatch, useAppSelector} from "@/store/store";
import {fileUploaderActions, getSelectedFiles} from "@/fsd-structure/widgets";
import {uploadFilesToServerByChunks} from "@/fsd-structure/widgets/FileUploader/lib/processFileChunksFetches";
import {fileUploadFilesToServerByChunks} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/fileUploader.asyncThunk";

const useOnSaveStoreFiles = () => {

    const dispatch = useAppDispatch();
    const selectedFiles = useAppSelector(getSelectedFiles);

    const onSaveStoreFiles = () => {
        (async () => {
            await dispatch(fileUploadFilesToServerByChunks(selectedFiles));
            dispatch(fileUploaderActions.setSelectedFiles([]));
        })();
    };

    return {
        onSaveStoreFiles
    }
}

export default useOnSaveStoreFiles;