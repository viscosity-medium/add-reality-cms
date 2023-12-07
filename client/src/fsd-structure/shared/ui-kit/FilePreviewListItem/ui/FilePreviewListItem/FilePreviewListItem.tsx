'use client'

import {FC} from "react";
import {CloseButton, Li, Paragraph} from "@/fsd-structure/shared";
import cls from "./filePreviewListItem.module.scss";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import Image from "next/image";
import {
    useOnDeleteButtonClick
} from "../../hooks/useOnDeleteButtonClick.hooks";

interface FilePreviewListItemProps extends StoreFileProps {
    index: number
}

const FilePreviewListItem: FC<FilePreviewListItemProps> = ({
    src,
    id,
    name,
    extension,
    type,
    index,
    previewSrc
}) => {

    const size = 40;
    const {onDeleteButtonClick} = useOnDeleteButtonClick(index);

    return(
        <Li
            className={cls.listItem}
        >
            <Paragraph
                className={cls.listItemParagraph}
            >
                {
                    index + 1
                }) {
                    name
                }
            </Paragraph>
            {
                src && (
                    <Image
                        src={previewSrc}
                        alt={name}
                        width={size}
                        height={size}
                        className={cls.image}
                    />
                )
            }
            <CloseButton
                className={cls.deleteButton}
                onClick={() => {
                    onDeleteButtonClick()
                }}
            />
        </Li>
    );

};

export { FilePreviewListItem } ;