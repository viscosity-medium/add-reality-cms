import {useAppDispatch, useAppSelector} from "@/store/store";
import {fileUploaderActions, getSelectedFiles} from "@/fsd-structure/widgets";
import {ChangeEvent, RefObject, useState} from "react";

export const useSelectedFilesChange = (ref: RefObject<HTMLInputElement>) => {

    const dispatch = useAppDispatch();
    const [files, setFiles] = useState<File[]>([]);
    const selectedFiles = useAppSelector(getSelectedFiles);
    // const formData = new FormData();
    // const fileList = ref?.current?.files;

    const onSelectedFilesChange = (files: File[]) => {
        dispatch(fileUploaderActions.setSelectedFiles([
            ...selectedFiles,
            ...files
        ]));
    }
    const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event?.target?.files){
            const filesArray = Array.from(event.target.files);
            console.log( filesArray );
            setFiles( prevState => filesArray );
            onSelectedFilesChange(filesArray);
        }
    }
    const onDeleteButtonClick = (fileIndex: number) => {
        const selectedFilesCopy = [...selectedFiles].filter((_, index) => {
            return (
                index !== fileIndex
            )
        });
        dispatch(fileUploaderActions.setSelectedFiles(selectedFilesCopy));
    }


    return {
        onSelectedFilesChange,
        onFileInputChange,
        onDeleteButtonClick
    }

}