'use client'

import {Button, Div, Hr, joinClassnames, Paragraph} from "@/fsd-structure/shared";
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
            <Button
                className={cls.deleteButton}
                onClick={() => {
                    onDeleteButtonClick(fileIndex);
                }}
            >
                <Hr className={joinClassnames([cls.h, cls.hr1])}/>
                <Hr className={joinClassnames([cls.h, cls.hr2])}/>
            </Button>
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