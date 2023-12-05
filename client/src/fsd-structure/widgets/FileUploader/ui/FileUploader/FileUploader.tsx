'use client';

import {FileUploadArea} from "../FileUploadArea/FileUploadArea";
import {Div} from "@/fsd-structure/shared";
import {FilesPreviewArea} from "@/fsd-structure/widgets/FileUploader/ui/FilesPreviewArea/FilesPreviewArea";
import {useRef} from "react";
import cls from "./fileUploader.module.scss";

const FileUploader = () => {

    const inputFileRef = useRef<HTMLInputElement>(null);

    return (
        <Div
            className={cls.fileUploader}
        >
            <FilesPreviewArea
                inputFileRef={inputFileRef}
            />
            <FileUploadArea
                inputFileRef={inputFileRef}
            />
        </Div>
    );

};

export default FileUploader;