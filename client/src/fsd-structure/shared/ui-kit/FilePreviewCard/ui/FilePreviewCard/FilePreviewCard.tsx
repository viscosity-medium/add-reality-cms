'use client'

import {FC, memo} from "react";
import {FilePreviewItemProps, MimeTypes} from "../../types/filePreview.d";
import {Div, NextImage, Video} from "@/fsd-structure/shared";
import FilePreviewOverlay from "../FilePreviewOverlay/FilePreviewOverlay";
import cls from "./filePreviewCard.module.scss"


const FilePreviewCard: FC<FilePreviewItemProps> = memo(({
    selectedFile,
    fileIndex,
    inputFileRef
}) => {

    const size = 200;
    const fileType = selectedFile.type as MimeTypes;

    if([MimeTypes["image/png"], MimeTypes["image/jpeg"]].includes(fileType)) {

        const imageBlobSrc = URL.createObjectURL(selectedFile);

        return(
            <Div
                className={cls.itemWrapper}
            >
                <FilePreviewOverlay
                    selectedFile={selectedFile}
                    fileIndex={fileIndex}
                    inputFileRef={inputFileRef}
                />
                <NextImage
                    src={imageBlobSrc}
                    alt={"image-preview"}
                    width={size}
                    height={size}
                    className={cls.previewItem}
                />
            </Div>
        )

    }

    if(selectedFile.type === MimeTypes["video/mp4"]) {

        const videoBlobSrc = URL.createObjectURL(selectedFile);

        return (
            <Div
                className={cls.itemWrapper}
            >
                <FilePreviewOverlay
                    selectedFile={selectedFile}
                    fileIndex={fileIndex}
                    inputFileRef={inputFileRef}
                />
                <Video
                    src={videoBlobSrc}
                    className={cls.previewItem}
                />
            </Div>
        )

    }

});

export default FilePreviewCard ;