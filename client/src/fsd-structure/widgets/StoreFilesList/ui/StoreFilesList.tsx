import {FilePreviewListItem, joinClassnames, Ul} from "@/fsd-structure/shared";
import {useAppSelector} from "@/store/store";
import {getPlayerContent, getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import cls from "./storeFilesList.module.scss";
import {FC} from "react";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

interface StoreFilesList {
    className?: string
    isMutable: boolean
    sourceType: "store" | "playerContent"
    onChooseAction?: (item: StoreFileProps) => void
}

const StoreFilesList: FC<StoreFilesList> = ({
    className="",
    isMutable = false,
    onChooseAction,
    sourceType
}) => {

    const previewListItems = useAppSelector(getStoreFiles);
    const currentPlayerContent = useAppSelector(getPlayerContent);
    const sourceArray = sourceType === "store" ? previewListItems : currentPlayerContent;

    return (
        <Ul
            className={joinClassnames([cls.storeFilesList, className])}
        >
            {
                sourceArray.map((item, index) => {
                    return (
                        <FilePreviewListItem
                            key={item.id}
                            {
                            ...item
                            }
                            index={index}
                            isMutable={isMutable}
                            sourceType={sourceType}
                            onChooseAction={() => {
                                onChooseAction?.(item)
                            }}
                        />
                    )
                })
            }
        </Ul>
    );

};

export  {
    StoreFilesList
};