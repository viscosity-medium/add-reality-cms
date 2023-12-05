'use client'

import {FC} from "react";
import {Li, Paragraph} from "@/fsd-structure/shared";
import cls from "./filePreviewListItem.module.scss";
import {FileStoreItem} from "@/fsd-structure/widgets/FileStoreList/model/fileStore.slice";
import Image from "next/image";

interface FilePreviewListItemProps extends FileStoreItem {
    index?: number
}

const FilePreviewListItem: FC<FilePreviewListItemProps> = ({
    src,
    id,
    name,
    extension,
    type,
    index
}) => {

    return(
        <Li
            className={cls.listItem}
        >
            <Paragraph>
                {
                    index
                }) {
                    name
                }
            </Paragraph>
            {
                src && (
                    <Image
                        src={src}
                        alt={name}
                    />
                )
            }
        </Li>
    );

};

export { FilePreviewListItem } ;