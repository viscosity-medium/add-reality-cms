'use client'

import {useAppSelector} from "@/store/store";
import {getSelectedFiles} from "@/fsd-structure/widgets";
import {uploadFilesToServerByChunks} from "@/fsd-structure/widgets/FileUploader/lib/processFileChunksFetches";

const useOnFormSave = () => {

    const selectedFiles = useAppSelector(getSelectedFiles);

    const onSaveFormButtonClick = () => {
        (async () => {
            await uploadFilesToServerByChunks({
                files: selectedFiles
            })
        })();
    };

    return {
        onSaveFormButtonClick
    }
}

export default useOnFormSave;