'use client';

import {CustomButton, CustomHeader, defineMargins, Div, Hr} from "@/fsd-structure/shared";
import {FileUploader, getSelectedFiles, StoreFilesList, useOnSaveStoreFiles} from "@/fsd-structure/widgets";
import {useAppSelector} from "@/store/store";
import cls from "./storeFilesData.module.scss";

const StoreFilesData = () => {

    const selectedFiles = useAppSelector(getSelectedFiles);
    const isButtonDisabled = selectedFiles.length === 0;
    const { onSaveStoreFiles } = useOnSaveStoreFiles();

    return (
        <Div
            className={cls.wrapper}
        >
            <CustomHeader
                tag={"h2"}
                isColored
                className={
                    defineMargins({
                        marginTop: "mt20"
                    })
                }
            >
                Контент в расписании
            </CustomHeader>
            <Div
                className={cls.informationWrapper}
            >
                <Div
                    className={cls.storeFilesListWrapper}
                >
                    <StoreFilesList/>
                </Div>
                <Hr/>
                <Div
                    className={cls.filesUploader}
                >
                    <FileUploader/>
                </Div>
            </Div>
            <CustomButton
                customWidth={"bigWidth"}
                styleType={"colored"}
                className={cls.submitButton}
                disabled={isButtonDisabled}
                onClick={()=>{
                    onSaveStoreFiles();
                }}
            >
                {isButtonDisabled ? "Добавьте": "Загрузить"} новые файлы
            </CustomButton>
        </Div>
    );
};

export {StoreFilesData};