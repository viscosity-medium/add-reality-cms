'use client'

import {FC, ReactNode} from "react";
import {Button, CloseButton, Div, joinClassnames, Li, Paragraph} from "@/fsd-structure/shared";
import cls from "./filePreviewListItem.module.scss";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import Image from "next/image";
import {useOnDeleteButtonClick} from "../../hooks/useOnDeleteButtonClick.hooks";
import {Identifier} from "dnd-core";

export interface FilePreviewListItemProps extends StoreFileProps {
    index: number
    isMutable: boolean
    onChooseAction?: (item: StoreFileProps) => void
    sourceType: "store" | "playerContent"
    dataHandlerId?: Identifier | null
}

const FilePreviewListItem: FC<FilePreviewListItemProps> = ({
    src,
    id,
    name,
    extension,
    type,
    index,
    previewSrc,
    isMutable,
    onChooseAction,
    sourceType,
    dataHandlerId
}) => {

    const size = 40;
    const {onDeleteButtonClick} = useOnDeleteButtonClick(sourceType, index);

    const Wrapper = ({ className="", children}: { className?: string, children: ReactNode }) => (
        onChooseAction ?
            <Button className={
                joinClassnames([className, cls.interactiveButton])}
                    onClick={() => {
                        onChooseAction({id, src, name, extension, type, previewSrc});
                    }}
            >
                {

                    children
                }
            </Button> :
            <Div
                className={className}
            >
                {
                    children
                }
            </Div>
    );

    return(
        <Li
            className={cls.listItem}
            dataHandlerId={dataHandlerId}
        >
            <Wrapper className={cls.contentWrapper}>
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
                {
                    isMutable ? (
                        <CloseButton
                            className={cls.deleteButton}
                            onClick={() => {
                                onDeleteButtonClick()
                            }}
                        />
                    ) : null
                }
            </Wrapper>

        </Li>
    );

};

export { FilePreviewListItem } ;