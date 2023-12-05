'use client';

import {CustomHeader, defineMargins} from "@/fsd-structure/shared";
import {ContentStore, FileUploader} from "@/fsd-structure/widgets";

const FileStoreData = () => {
    return (
        <>
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
            <ContentStore/>
            <FileUploader/>
        </>
    );
};

export {FileStoreData};