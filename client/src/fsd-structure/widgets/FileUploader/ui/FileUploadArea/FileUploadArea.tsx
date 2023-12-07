import {Button, Input, Paragraph} from "@/fsd-structure/shared";
import {defaultMimeTypesString} from "../../types/fileUploader.d";
import {FC, RefObject} from "react";
import cls from "../FileUploader/fileUploader.module.scss";
import {useSelectedFilesChange} from "@/fsd-structure/widgets/FileUploader/model/fileUploader.hooks";

interface FileUploadAreaProps {
    inputFileRef: RefObject<HTMLInputElement>
}

const FileUploadArea: FC<FileUploadAreaProps> = ({
    inputFileRef,
}) => {

    const { onFileInputChange } = useSelectedFilesChange(inputFileRef);

    return (
        <>
            <Button
                onClick={() => {
                    inputFileRef.current?.click();
                }}
                className={cls.fileUploadArea}
            >
                <Paragraph
                    className={cls.fileUploadAreaText}
                >
                    Нажмите, чтобы загрузить контент
                </Paragraph>
                <Paragraph
                    className={cls.fileUploadAreaInstruction}
                >
                    Поддерживается видео (.mp4) изображения (.png/.jpg)
                </Paragraph>
            </Button>
            <Input
                type={"file"}
                multiple
                accept={defaultMimeTypesString}
                className={cls.inputFile}
                ref={inputFileRef}
                onChange={(event) => {
                    onFileInputChange(event);
                }}
            />
        </>
    );

};

export { FileUploadArea };