'use client'

import {FC, RefObject} from "react";
import {useAppSelector} from "@/store/store";
import {getSelectedFiles} from "@/fsd-structure/widgets";
import { FilePreviewCard } from "@/fsd-structure/shared";

interface FilePreviewProps {
    inputFileRef: RefObject<HTMLInputElement>
}

const FilesPreviewArea: FC<FilePreviewProps> = ({ inputFileRef }) => {

    const selectedFiles = useAppSelector(getSelectedFiles);

    return selectedFiles.map((selectedFile, fileIndex)=> {

        return (
            <FilePreviewCard
                key={fileIndex}
                selectedFile={selectedFile}
                fileIndex={fileIndex}
                inputFileRef={inputFileRef}
            />
        )

    });

};

export { FilesPreviewArea };