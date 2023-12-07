'use client';

import {CustomButton, CustomHeader, defineMargins, Div, Hr} from "@/fsd-structure/shared";
import {FileUploader, getSelectedFiles, StoreFilesList} from "@/fsd-structure/widgets";
import {useAppSelector} from "@/store/store";
import cls from "./storeFilesData.module.scss";
import {
    getStoreFiles,
    getStoreFilesBuffer
} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import useUploadStoreFilesHooks from "@/fsd-structure/widgets/InformationView/model/hooks/useUploadStoreFiles.hooks";
import useUpdateStoreFilesHooks from "@/fsd-structure/widgets/InformationView/model/hooks/useUpdateStoreFiles.hooks";

const StoreFilesData = () => {

    const selectedFiles = useAppSelector(getSelectedFiles);
    const storeFiles = useAppSelector(getStoreFiles);
    const storeFilesBuffer = useAppSelector(getStoreFilesBuffer);
    const isButtonDisabled = selectedFiles.length === 0;
    const areStoreFilesChanged = storeFiles !== storeFilesBuffer;
    const { onUploadNewStoreFiles } = useUploadStoreFilesHooks();
    const { onUpdateStoreFiles } = useUpdateStoreFilesHooks();

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
                <Hr
                    className={cls.hr}
                />
                <Div
                    className={cls.filesUploader}
                >
                    <FileUploader/>
                </Div>
            </Div>
            <Div className={cls.buttonsGroup}>
                <CustomButton
                    customWidth={"bigWidth"}
                    styleType={"colored"}
                    className={cls.submitButton}
                    disabled={!areStoreFilesChanged || storeFiles.length === 0}
                    onClick={()=>{
                        onUpdateStoreFiles()
                    }}
                >
                    {!areStoreFilesChanged || storeFiles.length === 0 ? "Обновление не требуется": "Обновить файлы"}
                </CustomButton>
                <CustomButton
                    customWidth={"bigWidth"}
                    styleType={"colored"}
                    className={cls.submitButton}
                    disabled={isButtonDisabled}
                    onClick={()=>{
                        onUploadNewStoreFiles();
                    }}
                >
                    {isButtonDisabled ? "Добавьте": "Загрузить"} новые файлы
                </CustomButton>
            </Div>
        </Div>
    );
};

export {StoreFilesData};