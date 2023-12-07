'use client'

import {CloseButton, Div, Paragraph} from "@/fsd-structure/shared";
import {useSelectedFilesChange} from "@/fsd-structure/widgets/FileUploader/model/fileUploader.hooks";
import {FC, RefObject} from "react";
import cls from "../FilePreviewCard/filePreviewCard.module.scss";

interface FilePreviewItemProps {
    selectedFile: File
    fileIndex: number,
    inputFileRef: RefObject<HTMLInputElement>
}

const FilePreviewOverlay: FC<FilePreviewItemProps> = ({
    selectedFile,
    fileIndex,
    inputFileRef
}) => {

    const { name } = selectedFile;
    const { onDeleteButtonClick } = useSelectedFilesChange(inputFileRef);

    return (
        <Div
            className={cls.infoOverlay}
        >
            <CloseButton
                onClick={() => {
                    onDeleteButtonClick(fileIndex);
                }}
                className={cls.deleteButton}
            />
            <Div className={cls.filenameWrapper}>
                <Paragraph>
                    {
                        name
                    }
                </Paragraph>
            </Div>
        </Div>
    )

};

export default FilePreviewOverlay;